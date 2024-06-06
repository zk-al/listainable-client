import { useEffect, useState } from "react";
import axios from "axios";
import "./ListPage.scss";

const PORT = process.env.PORT || 8080;
const baseUrl = `http://localhost:${PORT}`;

//TODO:
// 5. Add average eco score - find a way to associate numbers 1-5 with A-E so that I can calculate average with number then output letter

function ListPage() {
  const [userList, setUserList] = useState([]);
  const [averageScore, setAverageScore] = useState(null);

  const scoreToNumber = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
  };
  const numberToScore = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
  };

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await axios.get(`${baseUrl}/list`);
        setUserList(response.data);
      } catch (error) {
        console.error("Error fetching list: ", error);
      }
    };
    getList();
  }, []);

  const deleteItem = async (id) => {
    await axios.delete(`${baseUrl}/list/${id}`);
    setUserList(userList.filter((item) => item.id !== id));
  };

  const handleCheckbox = async (id) => {
    try {
      deleteItem(id);
    } catch (error) {
      console.error("Error deleting item: ", error);
    }
  };

  const handleQty = async (id, newQty) => {
    try {
      await axios.put(`${baseUrl}/list/${id}`, { quantity: newQty });
      setUserList(
        userList.map((listItem) =>
          listItem.id === id ? { ...listItem, quantity: newQty } : listItem
        )
      );
    } catch (error) {
      console.error("Error adding quantity: ", error);
    }
  };

  const increaseQty = async (id, currentQty) => {
    try {
      const newQty = parseInt(currentQty) + 1;
      handleQty(id, newQty);
    } catch (error) {
      console.error("Error adding quantity: ", error);
    }
  };

  const decreaseQty = async (id, currentQty) => {
    try {
      if (currentQty > 1) {
        const newQty = parseInt(currentQty) - 1;
        handleQty(id, newQty);
      } else {
        deleteItem(id);
      }
    } catch (error) {
      console.error("Error adding quantity: ", error);
    }
  };

  useEffect(() => {
    const numericScore = userList.map(
      (listItem) => scoreToNumber[listItem.eco_score]
    );

    const total = numericScore.reduce((acc, curr) => acc + curr, 0);
    const average = total / numericScore.length;
    const roundAverage = Math.round(average);

    const letterScore = numberToScore[roundAverage];
    setAverageScore(letterScore);
  }, [userList]);

  return (
    <>
      <ul>
        {userList.map((listItem) => (
          <li key={listItem.id}>
            <input
              type="checkbox"
              onChange={() => {
                handleCheckbox(listItem.id);
              }}
            />
            <p>{listItem.product_name}</p>
            <div>
              <button
                onClick={() => increaseQty(listItem.id, listItem.quantity)}
              >
                +
              </button>
              <p>{listItem.quantity}</p>
              <button
                onClick={() => decreaseQty(listItem.id, listItem.quantity)}
              >
                -
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div>Average EcoScore: {averageScore}</div>
    </>
  );
}

export default ListPage;

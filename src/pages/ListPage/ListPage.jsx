import { useEffect, useState } from "react";
import axios from "axios";
import "./ListPage.scss";
import "../../styles/partials/_global.scss";

const PORT = process.env.PORT || 8080;
const baseUrl = `http://localhost:${PORT}`;

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
      <section className="list">
        <h1 className="list__header">MY LIST</h1>
        <ul className="list__list">
          {userList.map((listItem) => (
            <li className="list__item" key={listItem.id}>
              <input
                className="list__checkbox"
                type="checkbox"
                onChange={() => {
                  handleCheckbox(listItem.id);
                }}
              />
              <div className="list__content-wrap">
                <h2 className="list__name">{listItem.product_name}</h2>
                <img
                  className="list__img"
                  src={`${baseUrl}/${listItem.product_image}`}
                  alt={listItem.product_name}
                />

                <div className="list__qty">
                  <button
                    className="list__btn btn"
                    onClick={() => increaseQty(listItem.id, listItem.quantity)}
                  >
                    +
                  </button>
                  <p className="list__qty-text">{listItem.quantity}</p>
                  <button
                    className="list__btn btn"
                    onClick={() => decreaseQty(listItem.id, listItem.quantity)}
                  >
                    -
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="eco-score">Average Eco Score: {averageScore}</div>
      </section>
    </>
  );
}

export default ListPage;

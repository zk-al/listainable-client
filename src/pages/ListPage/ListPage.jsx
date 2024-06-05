import { useEffect, useState } from "react";
import axios from "axios";
import "./ListPage.scss";

const PORT = process.env.PORT || 8080;
const baseUrl = `http://localhost:${PORT}`;

//TODO:
// 1. Add DELETE axios handle onChange to checkbox
// 2. Add increase to + btn - add + 1 to current qty
// 3. Add decrease to - btn -  -1 to current qty
// 4. Add qtyHandler - axios PUT to trigger when qty is changed - this iwll update the qty on the front end
// 5. Add average eco score - find a way to associate numbers 1-5 with A-E so that I can calculate average with number then output letter

function ListPage() {
  const [userList, setUserList] = useState([]);

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

  return (
    <>
      <ul>
        {userList.map((listItem) => (
          <li key={listItem.id}>
            <input type="checkbox" />
            <p>{listItem.product_name}</p>
            <div>
              <button>+</button>
              <p>{listItem.quantity}</p>
              <button>-</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListPage;

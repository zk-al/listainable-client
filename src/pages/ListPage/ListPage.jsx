import { useEffect, useState } from "react";
import axios from "axios";
import "./ListPage.scss";

const PORT = process.env.PORT || 8080;
const baseUrl = `http://localhost:${PORT}`;

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
          <li>
            <input type="checkbox" />
            <p>{listItem.product_name}</p>
            <p>{listItem.quantity}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListPage;

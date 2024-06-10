import "./SearchResultsPage.scss";
import "../../styles/partials/_global.scss";

import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import plusIcon from "../../assets/icons/plus-large-svgrepo-com.svg";

const PORT = process.env.PORT || 8080;
const baseUrl = `http://localhost:${PORT}`;

function SearchResultsPage() {
  const params = useParams();
  const query = params.query;

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    try {
      const getSearchResults = async (query) => {
        const response = await axios.get(`${baseUrl}/search?query=${query}`);
        setSearchResults(response.data);
      };
      getSearchResults(query);
    } catch (error) {
      console.error("Error fetching search data: ", error);
    }
  }, [query]);

  // Used in both Search and HomePage
  const handleAdd = async (productId) => {
    // This will change to dynamically work depending on the user that is logged in
    const listId = 1;
    try {
      const response = await axios.get(`${baseUrl}/list/${listId}`);
      const productList = response.data; // Assuming the response is an array of products in the list

      const existingProduct = productList.find(
        (product) => product.product_id === productId
      );

      if (!existingProduct) {
        await axios.post(`${baseUrl}/list/${listId}`, {
          productId,
          quantity: 1,
        });
      }
      alert("Item added! Check your list to update the quantity.");
    } catch (error) {
      console.error("Error adding quantity: ", error);
    }
  };

  return (
    <section className="results">
      {/* map through results and populate + add to list icon */}
      {searchResults.map((product) => (
        <div className="card">
          <div className="card__add" onClick={() => handleAdd(product.id)}>
            <img className="card__add-icon" src={plusIcon} alt="Plus Icon" />
          </div>
          <Link to={`/product/${product.id}`}>
            <img
              className="card__image"
              src={`${baseUrl}/${product.product_image}`}
              alt={product.product_name}
            />
            <div className="card__text">
              <h3 className="card__name">{product.product_name}</h3>
              <h4 className="eco-score">Eco Score: {product.eco_score}</h4>
              <h4 className="nutri-score">
                Nutri Score: {product.nutri_score}
              </h4>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}

export default SearchResultsPage;

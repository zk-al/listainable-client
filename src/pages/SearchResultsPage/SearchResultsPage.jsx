import "./SearchResultsPage.scss";
import "../../styles/partials/_global.scss";

import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

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

  return (
    <section>
      {/* map through results and populate + add to list icon */}
      {searchResults.map((product) => (
        <div>
          <p>{product.product_image}</p>
          <h3>{product.product_name}</h3>
        </div>
      ))}
    </section>
  );
}

export default SearchResultsPage;

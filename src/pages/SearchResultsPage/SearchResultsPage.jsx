import "./SearchResultsPage.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const PORT = process.env.PORT || 8080;
const baseUrl = `http://localhost:${PORT}`;

function SearchResultsPage() {
  const params = useParams();
  const query = params.id;

  const [searchResult, setSearchResults] = useState([]);

  useEffect(() => {
    const getSearchResults = async (query) => {
      const response = await axios.get(`${baseUrl}/search?query=${query}`);
      setSearchResults(response.data);
    };
    getSearchResults(query);
    console.log(searchResult);
  }, [query]);

  return (
    <section>
      {/* map through results and populate + add to list icon */}
      <div>
        <p>Image</p>
        <h3>Product Name</h3>
      </div>
    </section>
  );
}

export default SearchResultsPage;

import "./SearchBar.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchEnter = (e) => {
    if (e.key === "Enter") {
      navigateToSearchResults();
    }
  };

  const navigateToSearchResults = () => {
    navigate(`/search-results/${searchQuery}`);
  };

  return (
    <>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchInput}
        onKeyDown={handleSearchEnter}
        placeholder="Search"
      />
    </>
  );
}

export default SearchBar;

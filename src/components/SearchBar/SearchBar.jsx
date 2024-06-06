import "./SearchBar.scss";
import { useState } from "react";
import axios from "axios";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchInput}
        placeholder="Search"
      />
    </>
  );
}

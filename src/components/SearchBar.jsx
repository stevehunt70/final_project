import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  return (
    <div style={styles.searchBar}>
      <input
        type="text"
        placeholder="Search..."
        style={styles.input}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <button style={styles.button} onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

const styles = {
  searchBar: {
    display: "flex",
    justifyContent: "center",
    padding: "10px",
    backgroundColor: "#f0f0f0",
    gap: "8px",
  },
  input: {
    width: "300px",
    padding: "8px",
    fontSize: "16px",
  },
  button: {
    padding: "8px 12px",
    cursor: "pointer",
  },
};

export default SearchBar;

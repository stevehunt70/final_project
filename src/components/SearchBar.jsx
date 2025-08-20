// SearchBar.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim()) {
      navigate(`/search?q=${encodeURIComponent(term)}`);
    }
  };

  return (
    <div style={styles.searchBar}>
      <form onSubmit={handleSubmit} style={{display: "flex"}}>
        <input
          type="text"
          placeholder="Search videos..."
          style={styles.input}
          value={term}
          onChange={
            (e) => setTerm(e.target.value)} 
        />
        <button type="submit" style={styles.button}>
          🔍
        </button>
      </form>
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
    border: "none",
    border: "1px solid #cccaaa",
    borderRadius: "8px",
    marginRight: "10px",
  },
  button: {
    padding: "8px 12px",
    cursor: "pointer",
    border: "none",
    border: "1px solid #cccaaa",
    borderRadius: "8px",
  },
};

export default SearchBar;

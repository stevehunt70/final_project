import React from 'react';

const SearchBar = () => {
  return (
    <div style={styles.searchBar}>
      <input
        type="text"
        placeholder="Search..."
        style={styles.input}
      />
      <button style={styles.button}>Search</button>
    </div>
  );
};

const styles = {
  searchBar: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    gap: '8px',
  },
  input: {
    width: '300px',
    padding: '8px',
    fontSize: '16px',
  },
  button: {
    padding: '8px 12px',
    cursor: 'pointer',
  },
};

export default SearchBar;

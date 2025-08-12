import React from "react";
import SearchBar from "./SearchBar";
import profilePic from "../assets/Profile.png";

const Header = () => {
  return (
    <header style={styles.header}>
      <button style={styles.menuButton}>☰</button>

      <div style={styles.searchBarContainer}>
        <SearchBar />
      </div>

      <img
        src={profilePic}
        alt="Profile"
        style={{ width: "40px", height: "40px", borderRadius: "50%" }}
      />
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 16px",
    borderBottom: "1px solid #ccc",
    backgroundColor: "#f9f9f9",
    gap: "10px",
  },
  menuButton: {
    fontSize: "24px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  searchBarContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  profileImage: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  },
};

export default Header;

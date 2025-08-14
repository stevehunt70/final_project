import React from "react";
import SearchBar from "./SearchBar";
import profilePic from "../assets/Profile.png";
import logoImg from "../assets/logo.png"
import logoTxt from "../assets/logotxt.png"

const Header = () => {
  return (
    <header style={styles.header}>
      <button style={styles.menuButton}>☰</button>
      <img src={logoImg} alt="Logo" style={styles.logoImage} />
      <img src={logoTxt} alt="LogoTxt" style={styles.logoText} />

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
  logoImage: {
    width: "50px",
    height: "auto",
  },
  logoText: {
    width: "75px",
    height: "auto",
  }
};

export default Header;

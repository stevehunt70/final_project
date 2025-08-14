/*import React from "react";
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
*/

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import profilePic from "../assets/Profile.png";
import logoImg from "../assets/logo.png";
import logoTxt from "../assets/logotxt.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  // Fetch user data from backend
  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => {
        setUserName(data.username);
        setEmail(data.email);
      })
      .catch((err) => console.error("Error fetching user data:", err));
  }, []);

  // Save text to database
  const saveText = async () => {
    if (!text.trim()) return;
    await fetch("/api/save-text", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const updated = await fetch("/api/user").then((res) => res.json());
  };

  return (
    <header style={styles.header}>      

      <img src={logoImg} alt="Logo" style={styles.logoImage} />
      <img src={logoTxt} alt="LogoTxt" style={styles.logoText} />

      <div style={styles.searchBarContainer}>
        <SearchBar />
      </div>

      <img src={profilePic} alt="Profile" style={styles.profileImage} />
      
      {/* Hamburger menu */}
      <div style={{ position: "relative" }}>
        <button
          style={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        {menuOpen && (
          <div style={{
                  ...styles.dropdown,
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  left: "auto",
                  zIndex: 1000
                }}>
            <p>
              <strong>{userName}</strong>
            </p>
            <p>
              {" "}
              <strong>{email}</strong>
            </p>
            <p>History:</p>
            <p>Upload Video:</p>
            <button style={{ width: "100%" }}>Upload Video</button>
          </div>
        )}
      </div>
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
    paddingRight: "30px",
  },
  dropdown: {
    position: "absolute",
    top: "40px",
    left: 0,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    width: "200px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    zIndex: 1000,
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
    width: "100px",
    height: "auto",
  },
  logoText: {
    width: "150px",
    height: "auto",
  },
};

export default Header;

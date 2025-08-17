import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import profilePic from "../assets/Profile.png";
import logoImg from "../assets/logo.png";
import logoTxt from "../assets/logotxt.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null); // null if not logged in

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    // Use Vite proxy, always call relative path /api
    fetch("/api/user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        if (res.status === 401) {
          // Unauthorized: token invalid or missing
          console.warn("Unauthorized, clearing token");
          localStorage.removeItem("token");
          setUser(null);
          return null;
        }
        if (!res.ok) {
          throw new Error(`Server error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data) setUser(data);
      })
      .catch((err) => {
        console.error("Error fetching user data:", err);
        setUser(null);
      });
  }, []);

  // logout instructions
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear stored user info
    localStorage.removeItem("user"); // remove user
    localStorage.removeItem("token"); //remove JWT token

    // redirect to LoginRegister.jsx page
    navigate("/");
  };

  return (
    <header style={styles.header}>
      <img src={logoImg} alt="Logo" style={styles.logoImage} />
      <img src={logoTxt} alt="LogoTxt" style={styles.logoText} />

      <div style={styles.searchBarContainer}>
        <SearchBar />
      </div>

      <img src={profilePic} alt="Profile" style={styles.profileImage} />

      {/* Hamburger menu only shows for logged-in users */}
      {user && (
        <div style={{ position: "relative" }}>
          <button
            style={styles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          {menuOpen && (
            <div
              style={{
                ...styles.dropdown,
                position: "absolute",
                top: "100%",
                right: 0,
                left: "auto",
                zIndex: 1000,
              }}
            >
              <div style={styles.dropdownOverlay}></div>
              <div style={styles.dropdownContent}>              
                <div style={styles.profileText}>
                  <p> user name: {user.username}</p>
                  <p> email: {user.email}</p>
                  <p> channel name: {user.channel_name}</p>
                <hr />
                <div style={styles.buttonHolder}>
                <button style={styles.button}> history</button>
                <button style={styles.button}> upload video</button>
                <button style={styles.button} onClick={handleLogout}> log out</button>
                </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
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
    backgroundColor: "white",
    backgroundImage: `url(${logoImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    width: "200px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    zIndex: 1000,
  },
  dropdownOverlay: {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.6)", // white overlay with 60% opacity
    pointerEvents: "none", // allows clicks through overlay
    zIndex: 0,
  },
  dropdownContent: {
    position: "relative",
    zIndex: 1,
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
  profileText: {
    color: "#2a0d83ff",
  },
  buttonHolder: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    width: "75%",
    height: "auto",
    alignItems: "center",
    margin: "5px",
  }
};

export default Header;

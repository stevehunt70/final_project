import React, { useState, useEffect, useRef } from "react";
import SearchBar from "./SearchBar";
import profilePic from "../assets/Profile.png";
import logoImg from "../assets/logo.png";
import logoTxt from "../assets/logotxt.png";
import usernameImg from "../assets/username.png";
import emailImg from "../assets/email.png";
import logoutImg from "../assets/logout.png";
import historyImg from "../assets/history.png";
import hamburgerImg from "../assets/hamburger.png";
import uploadImg from "../assets/upload.png";
import allVideosImg from "../assets/allvideos.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpenProfile, setMenuOpenProfile] = useState(false);
  const [user, setUser] = useState(null); // null if not logged in
  const navigate = useNavigate();

  //ref for hamburger dropdown
  const hamburgerRef = useRef(null);
  const profileRef = useRef(null);

  // ✅ auto-close after 5s
  useEffect(() => {
    let timer;
    if (menuOpen) {
      timer = setTimeout(() => {
        setMenuOpen(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [menuOpen]);

  useEffect(() => {
    let timer;
    if (menuOpenProfile) {
      timer = setTimeout(() => {
        setMenuOpenProfile(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [menuOpenProfile]);

  // ✅ close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (hamburgerRef.current && !hamburgerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setMenuOpenProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

      <div ref={hamburgerRef}>
        <div style={{ position: "relative" }}>
          <img src={hamburgerImg} 
                style={styles.hamburgerMenu} onClick={() => setMenuOpen(!menuOpen)} />
          {menuOpen && (
            <div
              style={{
                ...styles.dropdownMenu,
                position: "absolute",
                top: "100%",
                width: "200px",
                right: "auto",
                left: 0,
                zIndex: 1000,
              }}>
            
              <div style={styles.dropdownContent}>
                <hr />              
                <div style={styles.profileText}>
                  <div style={styles.dropdownImg}>
                    <img src={allVideosImg} style={{...styles.menuImage, cursor: "pointer"}} onClick={() => navigate("/videomain")}/>
                    <p style={{cursor: "pointer"}} onClick={() => navigate("/videomain")}>all videos</p>
                  </div>
                  <div style={styles.dropdownImg}>
                    <img src={uploadImg} style={{...styles.menuImage, cursor: "pointer"}} onClick={() => navigate("/upload")} />
                    <p style={{cursor: "pointer"}} onClick={() => navigate("/upload")}>upload a video</p>
                  </div>
                  <div style={styles.dropdownImg}>
                    <img src={logoutImg} style={{...styles.menuImage, cursor: "pointer"}} onClick={handleLogout} />
                    <p style={{cursor: "pointer"}} onClick={handleLogout}>log out</p>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div style={styles.searchBarContainer}>
        <SearchBar />
      </div>

      {/* Profile menu only shows for logged-in users */}
      {user && (
        <div ref={profileRef} style={{ position: "relative" }}>
          <button
            style={styles.menuButton} 
            onClick={() => setMenuOpenProfile(!menuOpenProfile)}>
              <img
                src={profilePic}
                alt="Profile Menu"
                style={styles.profileImage}
              />
          </button>
          {menuOpenProfile && (
            <div
              style={{
                ...styles.dropdown,
                position: "absolute",
                top: "100%",
                right: 0,
                left: "auto",
                width: "auto",
                zIndex: 1000,
              }}
            >
            <div style={styles.dropdownOverlay}></div>
              <div style={styles.dropdownContent}>              
                <div style={styles.profileText}>
                  <hr />
                  <div style={styles.dropdownImg}>
                    <img src={usernameImg} style={styles.menuImage} />
                    <p>{user.username}</p>
                  </div>
                  <div style={styles.dropdownImg}>
                    <img src={emailImg} style={styles.menuImage} />
                    <p>{user.email}</p>
                  </div>
                  <div style={styles.dropdownImg}>
                    <img src={usernameImg} style={styles.menuImage} />
                    <p>{user.channel_name}</p>
                  </div>
                  <div style={styles.dropdownImg}>
                    <img src={historyImg} style={styles.menuImage} />
                    <p>history</p>
                  </div>
                  <div style={styles.dropdownImg}>
                    <img src={logoutImg} style={{...styles.menuImage, cursor: "pointer"}} onClick={handleLogout} />
                    <p style={{cursor: "pointer"}} onClick={handleLogout}>log out</p>
                  </div>
                  <hr />
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
  },
  hamburgerMenu: {
    marginLeft: "40px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    cursor: "pointer",
    objectFit: "cover"
  },
  profileImage: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: "75px",
  },
  menuImage: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: "10px",
  },
  menuButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
  },
  dropdownMenu: {
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    width: "200px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    zIndex: 1000,
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
  dropdownImg: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "10px",
  },
  searchBarContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
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
    fontSize: "1rem",
    fontWeight: "bold",
    fontStyle: "italic",    
  },
  buttonHolder: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    border: "none",
    backgroundColor: "transparent",
    alignItems: "center",
    cursor: "grab"
  }
};

export default Header;

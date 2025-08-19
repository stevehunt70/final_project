import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import logo from "../assets/logo.png";

export default function LoginRegister() {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const BACKEND_URL = "http://localhost:3002";

  // Form state
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [channelName, setChannelName] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit() {
    setError("");

    // Prepare payload
    const payload = isRegister
      ? { username, email, password, channel_name: channelName }
      : { email, password };

    // Validation
    if (isRegister && (!username || !email || !password || !channelName)) {
      setError("All fields are required.");
      return;
    }

    if (isRegister && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!isRegister && (!email || !password)) {
      setError("Email and password are required.");
      return;
    }

    // Use proxy: Vite will forward /api requests to your backend
    const url = isRegister ? "/api/user" : "/api/user/login";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Server returned an error.");
        return;
      }

      // Save token and navigate
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user)); // <-- Added by Dan
      navigate("/VideoMain");
    } catch (err) {
      console.error("Network error:", err);
      setError("Network error, please try again.");
    }
  }

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.logoSection}>
        <img src={logo} alt="Office Insights Logo" style={styles.logo} />
        <div style={styles.tagline}>
          <p style={styles.title}>OFFICE INSIGHTS</p>
        </div>
      </div>
      <div style={styles.formContainer}>
        <h2 align="center">Welcome to Office Insights</h2>
        <div style={styles.signIn}>
          {error && <p style={styles.error}>{error}</p>}

          {/*username*/}
          {isRegister && (
            <>
              <label>Enter a username:</label>

              <input
                style={styles.signInInput}
                type="text"
                placeholder="Enter a Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </>
          )}
          {/*channel name*/}
          {isRegister && (
            <>
              <label>Enter a channel name:</label>
              <input
                style={styles.signInInput}
                type="text"
                placeholder="Enter a Channel Name"
                value={channelName}
                onChange={(e) => setChannelName(e.target.value)}
              />
            </>
          )}
          {/*email*/}
          <label>Enter email:</label>
          <input
            style={styles.signInInput}
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/*password*/}

          <label>Enter password:</label>
          <input
            style={styles.signInInput}
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/*confirm password*/}
          {isRegister && (
            <>
              <label>Confirm Password:</label>
              <input
                style={styles.signInInput}
                type="password"
                placeholder="Confirm Your Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </>
          )}
        </div>

        <div style={styles.buttonGroup}>
          <button style={styles.signInButton} onClick={handleSubmit}>
            {isRegister ? "Register" : "Login"}
          </button>

          <button
            style={{ ...styles.signInButton, backgroundColor: "#17a328ff" }}
            onClick={() => {
              setIsRegister(!isRegister);
              setError("");
            }}
          >
            {isRegister ? "Already a user? Login" : "New here? Register"}
          </button>
        </div>
      </div>
      <div style={styles.tagline}>
        <br />      
        <p style={styles.subtext}>SKILLS FOR TODAY, TOMORROW, THE FUTURE</p>
      </div>
    </div>
  );
}

const styles = {
  pageWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Verdana, sans-serif",
    background: "linear-gradient(to right, #f9dd51, #f89e5e, #f25656)",
    minHeight: "100vh",
    padding: "30px",
  },
  logoSection: {
    textAlign: "center",
    marginBottom: "20px",
  },
  logo: {
    width: "150px",
    height: "auto",
    marginBottom: "-10px",
  },
  tagline: {
    fontSize: "16px",
    lineHeight: "15px",
    fontWeight: "bold",
    color: "#444",
    letterSpacing: "1px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#0047ab",
    marginBottom: "10px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
  },
  subtext: {
    textAlign: "center",
    fontFamily: "Georgia",
    fontSize: "20px",
    color: "#1611a7ff",
    margin: "16px 0",
    fontWeight: "600",
    letterSpacing: "2px",
    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
  },
  formContainer: {
    backgroundColor: "#ffffff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "30px",
    width: "100%",
    maxWidth: "450px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  signIn: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginTop: "20px",
  },
  signInInput: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
  },
  signInButton: {
    padding: "10px 20px",
    marginTop: "20px",
    marginBottom: "10px",
    backgroundColor: "#0047ab",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  error: {
    color: "red",
    fontWeight: "bold",
  },
};

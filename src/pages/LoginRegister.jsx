import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

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
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2>
          <p>Welcome to Office Insights</p>
        </h2>
        <div style={styles.signIn}>
          {error && (
            <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
          )}

          {/*username*/}
          {isRegister && (
            <>
              <div><label>Enter a username:</label></div>
              <div>
                <input
                  style={styles.signInInput}
                  type="text"
                  placeholder="Enter a Username"
                  size="50"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <br />
            </>
          )}
          {/*channel name*/}
          {isRegister && (
            <>
              <div><label>Enter a channel name:</label></div>
              <div>
                <input
                  style={styles.signInInput}
                  type="text"
                  placeholder="Enter a Username"
                  size="50"
                  value={channelName}
                  onChange={(e) => setChannelName(e.target.value)}
                />
              </div>
              <br />
            </>
          )}
          {/*email*/}
          <div><label>Enter email:</label></div>
          <div>
            <input
              style={styles.signInInput}
              type="email"
              placeholder="Enter Email"
              size="50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          {/*password*/}
          <div><label>Enter password:</label></div>
          <div>
            <input
              style={styles.signInInput}
              type="password"
              placeholder="Enter Password"
              size="50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          {/*confirm password*/}
          {isRegister && (
            <>
              <div><label>Confirm Password:</label></div>
              <div>
                <input
                  style={styles.signInInput}
                  type="password"
                  placeholder="Confirm Your Password"
                  size="50"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <br />
            </>
          )}
        </div>

        <div>
          <button style={styles.signInButton} onClick={handleSubmit}>
            {isRegister ? "Register" : "Login"}
          </button>

          <button
            style={styles.signInButton}
            onClick={() => {
              setIsRegister(!isRegister);
              setError("");
            }}
          >
            {isRegister ? "Already a user? Login" : "New here? Register"}
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '50px',
    width: '100vw',
    margin: '0 auto',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '50vw',
    fontFamily: 'Verdana',
    fontSize: '14px',
    border: '1px solid black',
    borderRadius: '8px',
    textAlign: 'center',
    padding: '20px',
  },
  signIn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    marginBottom: '20px',
  },
  signInInput: {
    border: '1px solid #c6c9ec',
    size: '300',
  },
  signInButton: {
    width: '150px',
    height: '40px',
    margin: '30px',
    border: '1px solid #000000',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

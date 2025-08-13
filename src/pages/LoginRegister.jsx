import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function LoginRegister() {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);

  function handleLogin() {
    navigate("/videomain");
  }


  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2>
          <p>Welcome to Office Insights</p>
        </h2>
        <div style={styles.signIn}>
          <div><label>enter user id:</label></div>
          <div><input style={styles.singInInput} type="text" placeholder="User ID or Email" size="50" /></div>
          <br />
          <div><label>enter password:</label></div>
          <div><input style={styles.singInInput} type="password" placeholder="Password" size="50" /></div>

        {isRegister && (
          <input type="password" placeholder="Confirm Password" />
        )}
        </div>        
        <div>
          <button style={styles.signInButton} onClick={handleLogin}>
            {isRegister ? "Register" : "Login"}
          </button>

          <button style={styles.signInButton} onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Already have an account? Login" : "New here? Register"}
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
  singInInput: {
    border: '1px solid #c6c9ec',
    size: '300',
  },
  signInButton: {
    width: '150px',
    height: '40px',
    margin: '30px',
    border: '1px solid #000000',
    borderRadius: '5px',
  }
}

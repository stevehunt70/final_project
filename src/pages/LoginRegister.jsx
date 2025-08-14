import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function LoginRegister() {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);

  function handleSubmit() {
    navigate("/videomain");
  }


  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2>
          <p>Welcome to Office Insights</p>
        </h2>
        <div style={styles.signIn}>
          {/* show if new registration */}
          {isRegister && (
            <div>
              <div><label>enter a username:</label></div>
              <div>
                <input
                  style={styles.signInInput}
                  type="text"
                  placeholder="Enter a Username"
                  size="50"
                />
              </div>
              <br />
            </div>            
          )}
          {/* enter email address for login or register */}          
            <div><label>enter email:</label></div>
            <div>
              <input
                style={styles.signInInput}
                type="text"
                placeholder="Enter Email"
                size="50" 
              />
            </div>
            <br />
            {/* enter password for login or register */}
            <div><label>enter password:</label></div>
            <div>
              <input
                style={styles.signInInput}
                type="password"
                placeholder="Enter Password"
                size="50" 
              />
            </div>
            <br />
            {/* confirm password if register */}
            {isRegister && (
              <div>
                <div><label>Confirm Password:</label></div>
                <div>
                <input
                  style={styles.signInInput}
                  type="password"
                  placeholder="Confirm Your Password"
                  size="50"
                />
                </div>
                <br />
              </div>
            )}
        </div>        
        <div>
        {/* submit to login button*/}
        <button style={styles.signInButton} onClick={handleSubmit}>
          {isRegister ? "Register" : "Login"}
        </button>
        {/* register button */}
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
  }
}

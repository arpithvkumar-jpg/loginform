import React, { useState } from 'react';
import sidebar from '../components/sidebar';
import './home.css';

function Home() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  function onSubmit(){

    if(username === "" && password === ""){
      alert("Please enter username and password");
      setShowAlert(false);
    
    } else {
     
        setShowAlert(true);
    }
  }
 
  return (
    <>
      <div className="home-container">
        <div className="login-container">

          <h2>Login</h2>

          <div className="form-container">
            <div className="form-group">
              <label>Username:</label>

              <input
                type="text"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password:</label>

              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" onClick={onSubmit}>
              Login
            </button>

            {showAlert && (
              <div className="message">
                Saved Successfully
              </div>
            )}
          </div>

        </div>
      </div>
        <Sidebar />
    </>
  );
}

export default Home;
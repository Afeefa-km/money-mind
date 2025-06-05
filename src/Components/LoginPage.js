import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSingUpClick = () => {
    navigate("/signup");
  };

  const validate = () => {
    let valid = true;

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Login successful");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-title">
            <h1>Welcome Back</h1>
          </div>

          <div className="custom-input-field login-email">
            <input
              type="email"
              placeholder="Email adress"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <i className="fas fa-envelope icon"></i>
            {emailError && <p className="login-error">{emailError}</p>}
          </div>

          <div className="custom-input-field login-password">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <i className="fas fa-lock icon"></i>
            {passwordError && <p className="login-error"> {passwordError}</p>}
          </div>
          <div className="login-button">
            <button type="submit">Login</button>
          </div>

          <div className="login-divider">
            <span>or</span>
          </div>
          <p className="login-subtext">
            Don’t have an account yet?{" "}
            <span onClick={handleSingUpClick}>Sign up</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

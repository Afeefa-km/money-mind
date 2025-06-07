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
    if (!validate()) {
      return;
    }

    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
      console.log("login successfull");
      navigate("/home");
    } else {
      setPasswordError("Invalid email or password");
      console.log("login failed");
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
            <div className="login-error">
              <p
                className={`login-error-message ${emailError ? "visible" : ""}`}
              >
                {emailError || "\u00A0"}
              </p>
            </div>
          </div>

          <div className="custom-input-field login-password">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <i className="fas fa-lock icon"></i>

            <div className="login-error">
              {setPasswordError && (
                <p
                  className={`login-error-message ${
                    passwordError ? "visible" : ""
                  }`}
                >
                  {passwordError || "\u00A0"}
                </p>
              )}
            </div>
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

import React from "react";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <form className="login-form">
          <div className="login-title">
            <h1>Welcome Back</h1>
          </div>
          <div className="custom-input-field login-email">
            <input type="email" placeholder="Email adress" required></input>
            <i className="fas fa-envelope icon"></i>
          </div>
          <div className="custom-input-field login-password">
            <input type="password" placeholder="Password" required></input>
            <i className="fas fa-lock icon"></i>
          </div>
          <div className="login-button">
            <button type="submit">Login</button>
          </div>

          <div className="login-divider">
            <span>or</span>
          </div>
          <p className="login-subtext">
            Don’t have an account yet? <a href="/signup">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

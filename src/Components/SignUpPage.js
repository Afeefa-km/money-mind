import React from "react";
import "./SignUpPage.css";

function SignUpPage() {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <form className="signup-form">
          <div className="signup-title">
            <h1> Create an account</h1>
          </div>
          <div className="custom-input-field signup-name">
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className=" custom-input-field signup-email">
            <input type="email" placeholder="Email address" required />
          </div>
          <div className="custom-input-field signup-password">
            <input type="password" placeholder="Password" required />
          </div>

          <div className="custom-input-field signup-confirm-password">
            <input type="password" placeholder="Confirm password" required />
          </div>

          <div className="signup-button">
            <button type="submit" className="signup-button">
              sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;

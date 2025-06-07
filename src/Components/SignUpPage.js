import React, { useState } from "react";
import "./SignUpPage.css";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSingUpClick = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }

    if (!/[0-9]/.test(password)) {
      setError("Password must contain at least one number");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    setError("");
    console.log("Sign Up successful");
    handleSingUpClick();
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="signup-title">
            <h1> Create an account</h1>
          </div>
          <div className="custom-input-field signup-name">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className=" custom-input-field signup-email">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="custom-input-field signup-password">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="custom-input-field signup-confirm-password">
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="signup-error">
            {error && (
              <p className={`signup-error-message ${error ? "visible" : ""}`}>
                {error || "\u00A0"}
              </p>
            )}
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

import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
import Home from "./Components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/home" element={<Home />} />
      {/* Add more routes here as needed */}
      {/* <Route path="/another-page" element={<AnotherPage />} /> */}
      {/* <Route path="/yet-another-page" element={<YetAnotherPage />} /> */}
      {/* Add more routes here as needed */}
    </Routes>
  );
}

export default App;

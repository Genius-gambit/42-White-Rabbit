import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Planner from "./pages/Planner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/Planner" element={<Planner />} />
      </Routes>
    </Router>
  );
}

export default App;

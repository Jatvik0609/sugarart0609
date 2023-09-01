import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import necessary components from react-router-dom
import Register from "./Register"; // Import Register component
import Login from "./Login"; // Import Login component
import Home from "./Home"; // Import Home component

function App() {
  return (
    <Router>
      <Routes>
        {/* Route to the Register component when URL matches '/register' */}
        <Route path="/register" element={<Register />} />

        {/* Route to the Login component when URL matches '/login' */}
        <Route path="/login" element={<Login />} />

        {/* Route to the Home component when URL matches '/home' */}
        <Route path="/home" element={<Home />} />

        {/* Default route */}
        <Route path="/" element={<Login />} /> {/* Render Login component as default */}
      </Routes>
    </Router>
  );
}

export default App;

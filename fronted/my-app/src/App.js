// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import RegisterEmprendedor from "./pages/Register-Emprendedor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registerEmprendedor" element={<RegisterEmprendedor />} />
      </Routes>
    </Router>
  );
}

export default App;

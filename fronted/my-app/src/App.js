import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import RegisterEmprendedor from "./pages/Register-Emprendedor";
import RegisterUsuario from "./pages/RegisterUsuario";
import TipoPerfil from "./pages/TipoPerfil";
import Inicio from "./pages/Inicio";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registerEmprendedor" element={<RegisterEmprendedor />} />
        <Route path="/registerUsuario" element={<RegisterUsuario />} />
        <Route path="/rolSelect" element={<TipoPerfil />} />
        <Route path="/EmprendoHome" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

// src/components/Login.js
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../components/Button";
import FormControl from "../components/FormControl";
import "./CSS/Login.css"; // Importa el archivo CSS específico
import LeftSide from "../components/leftSide";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Aquí debes realizar una llamada a tu API de autenticación
    // y verificar las credenciales del usuario.
    // Si la autenticación es exitosa, puedes redirigir al usuario a la página de inicio.
  };

  return (
    <Container fluid className="">
      <Row>
        <Col xs={6} className="left-side">
          <LeftSide />
        </Col>
        <Col xs={6} className="right-side">
          <h1>Bienvenido</h1>
          <p className="textIngreso">Ingresa sesión a tu cuenta</p>
          <form>
            <FormControl
              controlId="formBasicEmail"
              type="email"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Correo electrónico"
            />
            <FormControl
              controlId="formBasicPassword"
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Contraseña"
            />
            <Button variant="orange" onClick={handleLogin}>
              Iniciar Sesión
            </Button>
            <Button variant="secondary" onClick={() => alert("Registrarse")}>
              Regístrate
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

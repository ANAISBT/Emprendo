// src/components/Login.js
import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Aquí debes realizar una llamada a tu API de autenticación
    // y verificar las credenciales del usuario.
    // Si la autenticación es exitosa, puedes redirigir al usuario a la página de inicio.
  };

  return (
    <Container>
      <Row>
        <Col xs={5}>1 of 2</Col>
        <Col xs={7}>
          <h1>Iniciar sesión</h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleLogin}>
              Ingresar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

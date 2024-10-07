import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../components/Button";
import FormControl from "../components/FormControl";
import { registerUsuario } from "../services/registerServices"; // Importa el servicio
import "./CSS/Login.css";
import LeftSide from "../components/leftSide";

function RegisterUsuario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleRegister = async () => {
    try {
      // Llama al servicio para registrar el usuario
      const response = await registerUsuario(
        nombre,
        email,
        password,
        "cliente",
      );
      setSuccess(true);
      setMessage(response.message); // Muestra el mensaje de éxito
      setNombre(""); // Limpia los campos después del registro
      setEmail("");
      setPassword("");
      window.location.href = "/EmprendoHome";
    } catch (err) {
      setSuccess(false);
      setMessage(err.message); // Muestra el mensaje de error
    }
  };

  return (
    <Container fluid className="">
      <Row>
        <Col xs={6} className="left-side">
          <LeftSide />
        </Col>
        <Col xs={6} className="right-side pInline5">
          <h1>Registro</h1>
          <p className="textIngreso">Completa tus datos</p>
          {/* Mostrar mensajes de éxito o error */}
          {message && (
            <p className={success ? "success-message" : "error-message"}>
              {message}
            </p>
          )}
          <form>
            <FormControl
              controlId="formBasicName"
              type="text"
              placeholder="Ingresa tu nombre completo"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              label="Nombre Completo"
            />
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
            <Button variant="orange" onClick={handleRegister}>
              Registrarme
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterUsuario;

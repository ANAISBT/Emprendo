import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../components/Button";
import FormControl from "../components/FormControl";
import LeftSide from "../components/leftSide";
import { login } from "../services/loginServices"; // Importa el servicio correcto
import "./CSS/Login.css"; // Importa el archivo CSS específico

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Mensaje de éxito

  const handleLogin = async () => {
    try {
      const data = await login(email, password); // Llama al servicio de autenticación
      localStorage.setItem("token", data.token);

      // Aquí podrías redirigir a la página de inicio o dashboard
      window.location.href = "/EmprendoHome";
    } catch (error) {
      setErrorMessage(error.message); // Muestra el error en caso de fallo
    }
  };
  const handleRegister = async () => {
    window.location.href = "/rolSelect";
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={6} className="left-side">
          <LeftSide />
        </Col>
        <Col xs={6} className="right-side pInline5">
          <h1>Bienvenido</h1>
          <p className="textIngreso">Ingresa sesión a tu cuenta</p>
          <form onSubmit={(e) => e.preventDefault()}>
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
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}{" "}
            {/* Mensaje de éxito */}
            <Button variant="orange" onClick={handleLogin}>
              Iniciar Sesión
            </Button>
            <Button variant="secondary" onClick={handleRegister}>
              Regístrate
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";

const Login = ({ setToken }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const usuarioPrueba = {
    email: "miguels715@gmail.com",
    password: "123456",
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      alert("Todos los campos son obligatorios.");
      return;
    }
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (email === usuarioPrueba.email && password === usuarioPrueba.password) {
      setToken(true);
      alert("Inicio de sesión exitoso. ¡Bienvenido!");
    } else {
      alert("Credenciales incorrectas. Por favor verifica tu email y contraseña.");
    }
  };

  return (
    <Container className="py-4">
      <h2 className="text-center">Inicio de Sesión</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingresa tu email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Ingresa tu contraseña"
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Iniciar Sesión
        </Button>
      </Form>
    </Container>
  );
};

export default Login;

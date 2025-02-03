import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useUserContext } from "../context/UserContext";

const Login = () => {
  const { setToken } = useUserContext(); 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
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

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const { id } = data; 
        
        localStorage.setItem("token", id);
        setToken(id);

        alert("Inicio de sesión exitoso. ¡Bienvenido!");
      } else {
        alert("Credenciales incorrectas. Por favor verifica tu email y contraseña.");
      }
    } catch (err) {
      console.error("Error al iniciar sesión:", err);
      alert("Hubo un problema al intentar iniciar sesión.");
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

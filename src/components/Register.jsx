import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useUserContext } from "../context/UserContext"; // Para acceder al contexto de usuario
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { setToken } = useUserContext(); // Usamos el contexto para establecer el token
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null); // Para manejar errores
  const navigate = useNavigate(); // Para redirigir después de un registro exitoso

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, confirmPassword } = formData;

    // Validación básica del formulario
    if (!email || !password || !confirmPassword) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    try {
      // Llamada a la API de registro
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Si la respuesta no es exitosa, mostramos un error
        setError(data.message || "Algo salió mal. Intenta de nuevo.");
      } else {
        // Si el registro es exitoso, guardamos el token y redirigimos
        localStorage.setItem("token", data.token); // Guardamos el token en localStorage
        setToken(data.token); // Actualizamos el contexto de usuario
        alert("¡Registro exitoso! Bienvenido.");
        navigate("/profile"); // Redirigimos al perfil del usuario
      }
    } catch (err) {
      setError("Error de conexión. Intenta más tarde.");
    }
  };

  return (
    <Container className="py-4">
      <h2 className="text-center">Registro</h2>
      {error && <p className="text-danger text-center">{error}</p>}
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
        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirmar Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirma tu contraseña"
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Registrar
        </Button>
      </Form>
    </Container>
  );
};

export default Register;

import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useUserContext } from "../context/UserContext";

const Profile = () => {
  const { token, logout } = useUserContext();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        if (!token) {
          throw new Error("No token found.");
        }

        const response = await fetch("http://localhost:5000/api/auth/me", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`, // Usamos el token en el header
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data); // Guardamos los datos del perfil
        } else {
          const errorText = await response.text();
          throw new Error(`Error: ${response.status} - ${errorText}`);
        }
      } catch (err) {
        setError(err.message); // Mostrar el mensaje de error
        console.error("Error al obtener el perfil:", err);
      }
    };

    fetchUserProfile();
  }, [token]);

  if (error) {
    return (
      <Container className="py-4">
        <h2>Error</h2>
        <p>{error}</p>
        <Button onClick={logout}>Cerrar sesión</Button>
      </Container>
    );
  }

  if (!userData) {
    return (
      <Container className="py-4">
        <h2>Cargando...</h2>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <h2>Perfil de Usuario</h2>
      <Card>
        <Card.Body>
          <Card.Title>{userData.email}</Card.Title>
          <Card.Text>
            <strong>ID de usuario:</strong> {userData.id}
          </Card.Text>
          <Button onClick={logout}>Cerrar sesión</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;

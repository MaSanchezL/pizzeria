import React, { useState, useEffect } from "react";
import { Col, Container, Row, Spinner, Alert } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import CardPizza from "./CardPizza";
import { useCartContext } from "../context/CartContext"

const Home = ({}) => {
  const { addToCart } = useCartContext();
  const url = "http://localhost:5000/api/pizzas";
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("No se pudieron cargar las pizzas");

        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return (
      <Container className="py-4 text-center">
        <Spinner animation="border" variant="primary" /> Cargando pizzas...
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-4">
        <Alert variant="danger">
          <strong>Error:</strong> {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      {Array.from({ length: Math.ceil(pizzas.length / 3) }).map((_, rowIndex) => (
        <Row className="justify-content-center" key={rowIndex}>
          {pizzas
            .slice(rowIndex * 3, rowIndex * 3 + 3)
            .map((pizza) => (
              <Col key={pizza.id}>
                <CardPizza
                  data={pizza}
                  showDescription={false}
                  addToCart={addToCart}
                />
              </Col>
            ))}
        </Row>
      ))}
    </Container>
  );
};

export default Home;

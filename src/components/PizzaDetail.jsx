import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Image, Spinner, Alert, Row, Col, ListGroup } from "react-bootstrap";

const PizzaDetail = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!response.ok) throw new Error("No se encontró la pizza");

        const data = await response.json();
        setPizza(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, [id]);

  if (loading) {
    return (
      <Container className="py-4 text-center">
        <Spinner animation="border" variant="primary" /> Cargando...
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

  if (!pizza) return <p>No se encontró la pizza.</p>;

  return (
    <div className="pizza-detail">
    <Row>
      <Col md={6} className="text-center">
        <h1>{pizza.name}</h1>
        <Image src={pizza.img} alt={pizza.name} fluid rounded />
      </Col>
      <Col md={6}>
        <h2>Ingredientes:</h2>
        <ListGroup>
          {pizza.ingredients.map((ingredient, index) => (
            <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
  </div>
);
};

export default PizzaDetail;

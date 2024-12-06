import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardPizza from "./CardPizza";
import { pizzas } from "../assets/js/pizzaData";

const Home = () => {
  return (
    <Container className="py-4">
      {Array.from({ length: Math.ceil(pizzas.length / 3) }).map((_, rowIndex) => (
        <Row className="justify-content-center" key={rowIndex}>
          {pizzas
            .slice(rowIndex * 3, rowIndex * 3 + 3)
            .map((pizza, i) => (
              <Col key={i}>
                <CardPizza
                  img={pizza.img}
                  nombre={pizza.nombre}
                  ingredientes={pizza.ingredientes}
                  precio={pizza.precio}
                />
              </Col>
            ))}
        </Row>
      ))}
    </Container>
  );
};

export default Home;
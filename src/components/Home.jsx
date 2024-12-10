import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardPizza from "./CardPizza";

const Home = ({ addToCart }) => {
  const url = "http://localhost:5000/api/pizzas";
  const [pizzas, setPizzas] = useState([]);
  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPizzas(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container className="py-4">
      {Array.from({ length: Math.ceil(pizzas.length / 3) }).map((_, rowIndex) => (
        <Row className="justify-content-center" key={rowIndex}>
          {pizzas
            .slice(rowIndex * 3, rowIndex * 3 + 3)
            .map((pizza, i) => (
              <Col key={i}>
                <CardPizza
                  data={pizza}
                  showDescription = {false}
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

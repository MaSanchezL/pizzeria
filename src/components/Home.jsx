import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardPizza from "./CardPizza";

const Home = () => {
  return (
    <>
     <Container className="py-4">
      <Row className="justify-content-center">
        <Col>
          <CardPizza
            img="./images/margarita.jpeg"
            nombre="Margarita"
            ingredientes="Salsa, Mozzarella, Albahaca"
            precio="5.950"
          ></CardPizza>
        </Col>
        <Col>
          <CardPizza
            img="./images/pepperoni.jpeg"
            nombre="Pepperoni"
            ingredientes="Salsa, Mozzarella, Pepperoni"
            precio="6.950"
          ></CardPizza>
        </Col>
        <Col>
          <CardPizza
            img="./images/estaciones.jpeg"
            nombre="Quattro Stazioni"
            ingredientes="Salsa, Alcachofa, Champiñones, Aceitunas Negras, Ajo"
            precio="9.950"
          ></CardPizza>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <CardPizza
            img="./images/marinara.jpeg"
            nombre="Marinara"
            ingredientes="Salsa, Ajo, Albahaca"
            precio="5.950"
          ></CardPizza>
        </Col>
        <Col>
          <CardPizza
            img="./images/quesos.jpeg"
            nombre="Quattro formaggi"
            ingredientes="Salsa, Mozzarella, Gorgonzola, Fontina, Parmesano"
            precio="1.0950"
          ></CardPizza>
        </Col>
        <Col>
          <CardPizza
            img="./images/burrata.jpeg"
            nombre="Burrata"
            ingredientes="Salsa, Mozzarella, Albahaca, Burrata"
            precio="7.950"
          ></CardPizza>
        </Col>
      </Row>
      </Container>
    </>
  );
};

export default Home;

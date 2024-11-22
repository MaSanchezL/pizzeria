import React from "react";
import { Button, Card } from "react-bootstrap";

const CardPizza = (props) => {
  return (
    <Card style={{ width: "18rem" }} className="my-4">
      <Card.Img
        variant="top"
        src={props.img}
        alt={props.nombre}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <hr />
        <Card.Text className="text-center">
          Ingredientes <br />
          🍕{props.ingredientes}
        </Card.Text>
        <hr />
        <Card.Text className="text-center">
          {" "}
          Precio <strong>${props.precio} </strong>
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="outline-dark" size="sm">
            Ver Más 👀
          </Button>
          <Button variant="dark" size="sm">
            Añadir 🛒
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;

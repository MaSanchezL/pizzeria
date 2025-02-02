import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

const CardPizza = ({ data, showDescription, addToCart }) => {
  const { id, img, name, desc, ingredients, price } = data;

  return (
    <Card className="my-4">
      <Card.Img
        variant="top"
        src={img}
        alt={name}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <hr />

        {showDescription && (
          <>
            <Card.Text className="text-center">{desc}</Card.Text>
            <hr />
          </>
        )}

        <Card.Text className="text-center">
          Ingredientes <br />
          🍕{ingredients?.join(", ")}
        </Card.Text>
        <hr />
        <Card.Text className="text-center">
          Precio <strong>${price} </strong>
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Link to={`/pizza-detail/${id}`}>
            <Button variant="outline-dark" size="sm">
              Ver Más 👀
            </Button>
          </Link>
          <Button
            variant="dark"
            size="sm"
            onClick={() =>
              addToCart({
                id,
                name,
                price,
              })
            }
          >
            Añadir 🛒
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;

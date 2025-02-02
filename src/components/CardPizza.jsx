import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

const CardPizza = (props) => {
  console.log(props);
  let showDescription = props.showDescription;
  props = props.data;
  return (
    <Card className="my-4">
      <Card.Img
        variant="top"
        src={props.img}
        alt={props.name}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <hr />

        {showDescription && (
          <>
            <Card.Text className="text-center">{props.desc}</Card.Text>
            <hr />
          </>
        )}

        <Card.Text className="text-center">
          Ingredientes <br />
          🍕{props?.ingredients?.join(", ")}
        </Card.Text>
        <hr />
        <Card.Text className="text-center">
          Precio <strong>${props.price} </strong>
        </Card.Text>
        <div className="d-flex justify-content-between">
        <Link to={`/pizza-detail/${props.id}`}>
            <Button variant="outline-dark" size="sm">
              Ver Más 👀
            </Button>
          </Link>
          <Button
            variant="dark"
            size="sm"
            onClick={() =>
              props.addToCart({
                id: props.id,
                name: props.name,
                price: props.price,
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

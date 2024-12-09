import React from "react";
import { Container, Table, Button } from "react-bootstrap";

const Cart = ({ cart, removeFromCart, incrementQuantity, decrementQuantity }) => {
  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container className="py-4">
      <h2 className="text-center">Carrito de Compras</h2>
      {cart.length > 0 ? (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => incrementQuantity(item.id)}
                    >
                      +
                    </Button>{" "}
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => decrementQuantity(item.id)}
                    >
                      -
                    </Button>{" "}
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h3 className="text-end">Total: ${calculateTotal()}</h3>
        </>
      ) : (
        <h4 className="text-center">El carrito está vacío</h4>
      )}
    </Container>
  );
};

export default Cart;

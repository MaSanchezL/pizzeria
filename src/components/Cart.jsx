import React, { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
import { useUserContext } from "../context/UserContext";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    calculateTotal,
    clearCart,
  } = useCartContext();

  const { token } = useUserContext(); 

  const [purchaseCompleted, setPurchaseCompleted] = useState(false); 
  const handleCompletePurchase = () => {
    if (token) {
      
      setPurchaseCompleted(true);
      clearCart();
      alert("¡Compra realizada con éxito!");
    }
  };

  return (
    <Container className="py-4">
      <h2 className="text-center">Carrito de Compras</h2>
      {purchaseCompleted ? (
        <></>
      ) : (
        <>
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
                        </Button>{" "}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <h3 className="text-end">Total: ${calculateTotal()}</h3>

      
              <Button
                variant="primary"
                size="lg"
                className="mt-4"
                block={true}
                disabled={!token}
                onClick={handleCompletePurchase}
              >
                Finalizar compra
              </Button>
            </>
          ) : (
            <h4 className="text-center">El carrito está vacío</h4>
          )}
        </>
      )}
    </Container>
  );
};

export default Cart;

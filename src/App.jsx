import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NavbarPage from "./components/NavbarPage";
import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./components/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import Pizza from "./components/Pizza";

function App() {
  const [token, setToken] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const incrementQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <Router>
   <NavbarPage token={token} setToken={setToken} cart={cart} />
      <Header />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

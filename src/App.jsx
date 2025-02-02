import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NavbarPage from "./components/NavbarPage";
import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./components/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import PizzaDetail from "./components/PizzaDetail";
import NotFound from "./components/NotFound";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <NavbarPage />
          <Header />
          <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza-detail/:id" element={<PizzaDetail />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Navigate to="/404" />} />
            <Route path="/404" element={<NotFound />} />
          </Routes>
          </CartProvider>
          <Footer />
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { UserProvider, useUserContext } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NavbarPage from "./components/NavbarPage";
import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import PizzaDetail from "./components/PizzaDetail";
import NotFound from "./components/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";

function AppRoutes() {
  const { token } = useUserContext();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pizza-detail/:id" element={<PizzaDetail />} />
      <Route path="/register" element={!token ? <Register /> : <Navigate to="/" />} />
      <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <NavbarPage />
          <Header />
          <AppRoutes />
          <Footer />
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;

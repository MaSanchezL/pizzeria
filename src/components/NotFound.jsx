// NotFound.jsx
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="text-center" style={{ padding: '50px' }}>
      <h1>¡Página no encontrada!</h1>
      <p>La página que buscas no existe.</p>
      <Button onClick={handleGoHome} variant="primary">Volver a la página principal</Button>
    </div>
  );
};

export default NotFound;

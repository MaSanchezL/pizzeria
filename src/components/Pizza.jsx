import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardPizza from './CardPizza';


const Pizza = (props) => {
    const url = "http://localhost:5000/api/pizzas/p001";
    const [pizza, setPizza] = useState([]);
    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setPizza(data);
    };
  
    useEffect(() => {
      getData();
    }, []);
    console.log(props)
  return (
    <>
     <Container className="py-4">
        <Row className="justify-content-md-center">
            <Col md="6">
                <CardPizza
                  data={pizza}
                  showDescription = {true}
                />
        </Col>
        </Row>
    </Container>
    </>
  )
}

export default Pizza
/* eslint-disable react/prop-types */

import { Card } from "react-bootstrap";

const Product = ({ image, nom, prix }) => {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={`/images/${image}`} />
      <Card.Body>
        <Card.Title>{nom}</Card.Title>
        <Card.Text>Prix: ${prix.toFixed(2)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;

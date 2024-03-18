import React from "react";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Img src={product.image} variant="top" />

      <Card.Body>
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>
      </Card.Body>

      <Card.Text as="h3">${product.price}</Card.Text>
    </Card>
  );
};

export default Product;

import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Product } from "../filesIndex";

import axios from "axios";

function HomeScreen() {
  const [products, setProducts] = useState([]);
  const baseUrl = JSON.stringify(import.meta.env.VITE_REACT_API_URL);
  console.log(baseUrl);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`http://localhost:5000/api/products`);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h2>Latest Products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;

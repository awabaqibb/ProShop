import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../products";
import {
  Button,
  Card,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { Rating } from "../filesIndex";

const ProductScreen = () => {
  const { pid: productId } = useParams();

  const product = products.find((p) => p._id === productId);
  console.log(product);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>

      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating value={product.rating} text={product.numReviews} />
            </ListGroupItem>
            <ListGroupItem>Price: ${product.price}</ListGroupItem>

            <ListGroupItem>{product.description}</ListGroupItem>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroupItem>
                <Row>
                  <Col>Price</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;

import React, { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Rating from "./rating"
import CountInStock from "./count-in-stock"


const ProductInfo = (props) => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  useEffect(() => {
    setBtnDisabled(props.currentStock < 1 ? true : false);
  })
  return (
    <>
      <h4>{props.name}</h4>
      <h6>{props.category}</h6>
      <Rating rating={props.rating} numReviews={props.numReviews} />

      <h3 className="mt-4">${props.price}</h3>
      <CountInStock count={props.currentStock} />
      <Row className="mt-2">
        <Col className="d-grid gap-2 col-8 mb-2">
          <Button className="" variant="outline-dark" disabled={btnDisabled} onClick={() => alert('added to cart')}>Add to Cart</Button>
        </Col>
      </Row>
      <Row>
        <Col className="d-grid gap-2 col-8">
          <Button size="" variant="dark" disabled={btnDisabled} onClick={() => alert('buy')}>BUY</Button>
        </Col>
      </Row>
    </>
  )
}
export default ProductInfo
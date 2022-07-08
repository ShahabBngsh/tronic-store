import Card from "react-bootstrap/Card";
import React from "react"
import * as Icon from "react-bootstrap-icons"

const Product = (props) => {
  const {
    _id,
    user,
    name,
    desc,
    img,
    price,
    quantity,
    reviews,
    rating,
    numReviews,
    category,
    discount,
  } = props.product;

  return (
    <Card className="shadow-sm">
      <Card.Img variant="top" src="./assets/mouse.png" />
      <Card.Body>
        <hr class="mt-2 mb-3" />
        <Card.Title><h6>{name}</h6></Card.Title>
        <div>
          <Icon.StarFill />
          <Icon.StarFill />
          <Icon.StarFill />
          <Icon.StarFill />
          <Icon.Star />
        </div>
        <Card.Text><h4>$<b>{price}</b></h4></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
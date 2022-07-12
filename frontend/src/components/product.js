import Card from "react-bootstrap/Card";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import * as Icon from "react-bootstrap-icons"
import ProductDetail from "./product-detail";

const Product = (props) => {
  const navigateTo = useNavigate();
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

  function handleClick() {
    //navigate to productdetail
    console.log(_id)
    navigateTo('/products/' + _id)
  }

  return (
    <Card className="shadow-sm" onClick={handleClick}>
      <Card.Img variant="top" src="./assets/mouse.png" />
      <Card.Body>
        <hr className="mt-2 mb-3" />
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
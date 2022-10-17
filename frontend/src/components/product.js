import Card from "react-bootstrap/Card";
import React from "react"
import { useNavigate } from "react-router-dom"
import Rating from "./rating";
import CountInStock from './count-in-stock'

const Product = (props) => {
  const navigateTo = useNavigate();
  const {
    _id,
    // user,
    name,
    // desc,
    image,
    price,
    // quantity,
    // reviews,
    currentStock,
    rating,
    numReviews,
    // category,
    // discount,
  } = props.product;

  function handleClick() {
    //navigate to productdetail
    console.log(_id)
    navigateTo('/products/' + _id)
  }

  return (
    <Card className="shadow-sm" onClick={handleClick}>
      <Card.Img variant="top" src={image} className="p-4" />
      <Card.Body>
        <hr className="mt-2 mb-3" />
        <Card.Title><h6>{name}</h6></Card.Title>
        <Rating rating={rating} numReviews={numReviews} />
        <Card.Text><h4>$<b>{price}</b></h4></Card.Text>
        <CountInStock count={currentStock} />
      </Card.Body>
    </Card>
  );
};

export default Product;

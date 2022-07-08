import { Card } from "@mui/material"
import React from "react"
// import { useNavigate } from "react-router-dom"

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
    <div>
      {/* <Card> */}
      <h3>{props.product.name}</h3>
      <h4>{price}</h4>
      {/* </Card> */}
    </div>
  );
};

export default Product;
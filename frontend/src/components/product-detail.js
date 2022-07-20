import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import Image from "./product-image"
import ProductInfo from "./product-info"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const ProductDetail = (props) => {
  const [product, setProduct] = useState();
  const id = useParams().id
  const URL = `http://localhost:4000/api/products/${id}`;
  console.log(URL)

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(URL)
        .then((res) => res.data)
        .then((data) => {
          setProduct(data)
        })
    };
    // console.log('fetching details')
    fetchHandler();
  }, [id])
  // console.log(details);

  if (typeof product === 'undefined') {
    return null;
  }

  return (
    <Container className="container mx-2">
      <Row>
        <Col> path > to > file</Col>
      </Row>
      <Row>
        <Col className="col-12 col-md-6">
          <Image src={product?.image} alt={product?.name} />
        </Col>
        <Col className="col-12 col-md-6 p-2">
          <ProductInfo name={product?.name} category={product?.category} price={product?.price} rating={product?.rating} numReviews={product?.numReviews} currentStock={product?.currentStock} />
        </Col>
      </Row>

      <h5 className="mt-4">About this Item</h5>
      <Row>
        <Col>
          {product?.description}
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail;
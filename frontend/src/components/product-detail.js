import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import Image from "./image"

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
  return (
    <>
      <div>path to file</div>
      {/* <Image className="thumbnail" src="https://m.media-amazon.com/images/I/81ef5sbZznL._AC_SL1500_.jpg" /> */}
    </>
  )
}

export default ProductDetail;
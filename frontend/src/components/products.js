import axios from 'axios'
import React, { useState, useEffect } from 'react'

import Product from './product'

// import { createProxyMiddlewre } from 'http-proxy-middleware'

const URL = "http://localhost:4000/api/products/"

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Products = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setProducts(data.products));
  }, []);
  console.log(products);

  return (
    <div class="">
      <ul class="container row">
        {
          products && products.map((product, i) => (
            <div key={i} class="col-xs-6 col-sm-4 col-sm-4 mb-4">
              <Product product={product} />
            </div>
          ))
        }
      </ul>
    </div>
  );
};

export default Products;

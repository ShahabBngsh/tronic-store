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
    <div>
      <ul>
        {
          products && products.map((product, i) => (
            <li key={i}>
              <Product product={product} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Products;

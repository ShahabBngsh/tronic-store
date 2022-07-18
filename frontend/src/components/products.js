import axios from 'axios'
import React, { useState, useEffect } from 'react'

import Product from './product'

const URL = "http://localhost:4000/api/products/"

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Products = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <ul className="container row">
        {
          products && products.map((product, i) => (
            <div key={i} className="col-xs-6 col-sm-4 col-sm-4 mb-4">
              <Product product={product} />
            </div>
          ))
        }
      </ul>
    </div>
  );
};

export default Products;

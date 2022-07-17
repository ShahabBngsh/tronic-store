import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CarouselBS from 'react-bootstrap/Carousel'

import style from '../style/style.module.css'

const Carousel = (props) => {
  const [products, setProducts] = useState();
  const URL = props.URL + '/getTop3Products';

  useEffect(() => {
    (async () => {
      await axios
        .get(URL)
        .then((res) => res.data)
        .then((data) => {
          setProducts(data)
        })
    })();
  }, []);

  if (typeof products === 'undefined') {
    return null;
  }

  return (
    <div className={["d-flex justify-content-center"]}>
      <CarouselBS id={style.carousel} className={[style.w500]} indicators={true}>
        <CarouselBS.Item >
          <img
            className={style.image}
            src={products[0].image}
            alt="First slide"
          />
        </CarouselBS.Item >
        <CarouselBS.Item >
          <img
            className={style.image}
            src={products[1].image}
            alt="Second slide"
          />
        </CarouselBS.Item>
        <CarouselBS.Item>
          <img
            className={style.image}
            src={products[2].image}
            alt="Third slide"
          />
        </CarouselBS.Item>

      </CarouselBS>
    </div>
  )
}

export default Carousel
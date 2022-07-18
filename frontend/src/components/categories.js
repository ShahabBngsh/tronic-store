import React, { useState, useEffect } from "react";
import axios from "axios";

import Category from "./category"

const fetchHandler = async (url) => {
  console.log(url);
  return await axios.get(url).then((res) => res.data);
}

const Categories = (props) => {

  const URL = props.URL + "/getCategories";
  const [cats, setCats] = useState();
  useEffect(() => {
    fetchHandler(URL).then(data => setCats(data));
  }, []);

  if (typeof cats === 'undefined') {
    return null;
  }
  return (
    <>
      <h5 className="px-4">Categories</h5>
      <ul className="container row">
        {
          cats && cats.map((cat, i) => (
            <div key={i} className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 mb-4">
              <Category name={cat._id} image={cat.Categories[0]} />
            </div>
          ))
        }
      </ul>
    </>
  )
}
export default Categories
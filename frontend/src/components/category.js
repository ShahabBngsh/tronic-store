import React from 'react';
import Card from 'react-bootstrap/Card'
import style from '../style/style.module.css'
const Category = (props) => {
  console.log(props.image)
  return (
    typeof props.image === 'undefined' ?
      <>
        <div> undefined </div>
      </> : //else
      <>
        <Card className="shadow-sm">
          <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <Card.Title><h6>{props.name}</h6></Card.Title>
          </Card.Body>
        </Card>
      </>
  )
}

export default Category
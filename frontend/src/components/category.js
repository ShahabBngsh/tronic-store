import React from 'react';
import Card from 'react-bootstrap/Card'
const Category = (props) => {
  // console.log(props.image)
  return (
    typeof props.image === 'undefined' ?
      <>
        <div> undefined </div>
      </> : //else
      <>
        <Card className="shadow-sm">
          <Card.Img variant="top" src={props.image} className="p-2" />
          <Card.Body>
            <Card.Title><h6>{props.name}</h6></Card.Title>
          </Card.Body>
        </Card>
      </>
  )
}

export default Category

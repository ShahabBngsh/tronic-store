import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Rating from "./rating"


const ProductInfo = (props) => {
  return (
    <>
      <h4>{props.name}</h4>
      <h6>{props.category}</h6>
      <Rating rating={props.rating} numReviews={props.numReviews} />

      <h3 className="mt-4">${props.price}</h3>
      <Row>
        <Col className="d-grid gap-2 col-6 mb-2">
          <Button className="" variant="outline-dark" onClick={() => alert('added to cart')}>Add to Cart</Button>
        </Col>
      </Row>
      <Row>
        <Col className="d-grid gap-2 col-6">
          <Button size="" variant="dark" onClick={() => alert('buy')}>BUY</Button>
        </Col>
      </Row>
    </>
  )
}
export default ProductInfo
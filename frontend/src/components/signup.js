import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import style from '../style/style.module.css'

const SignUp = () => {
  return (
    <div className="d-flex justify-content-center">
      <Card className={["p-4 container", style.mw400]}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder=" Full Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Email Address" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassworrd">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassworrd">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="tel" placeholder="Phone Number" pattern="[0-9]{4}-[0-9]{7}" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Home Address</Form.Label>
            <Form.Control type="text" placeholder="Delivery Address" />
          </Form.Group>
          <Button variant="dark" type="submit">Submit</Button>
        </Form>
      </Card>
    </div>
  )
}
export default SignUp;
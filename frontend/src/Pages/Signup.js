import React, { useState } from 'react'
import { Container, Form, Button, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const Signup = ({ showAlert }) => {
  const [signup, setsignUp] = useState({
    name: "", email: "", password: "", cpassword: ""
  })
  let history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = signup;
    const response = await fetch('http://localhost:5000/api/auth/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
    const json = await response.json()
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      history.push('/')
      showAlert("Account Created Successfully", 'success');
    }
    else {
      showAlert("Invalid Details", 'danger');

    }

    console.log(json);
  }
  const onChange = (e) => {
    setsignUp({ ...signup, [e.target.name]: e.target.value })
  }
  return (
    <Container>
      <Col lg={8} className='mx-auto shadow mt-5 p-4 rounded-rounded-3'>
        <h2 className='text-center'>Create an account to use iNotebook</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={signup.name} onChange={onChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" value={signup.email} onChange={onChange} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={signup.password} onChange={onChange} required minLength={5} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" name="cpassword" value={signup.cpassword} onChange={onChange} required minLength={5} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Container>
  )
}

export default Signup

import React, { useState } from 'react'
import { Container, Form, Button, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" })
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: login.email, password: login.password })
    });
    const json = await response.json()
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.auth.authtoken);
      history.push('/')
    }
    else {
      alert("Invalid credentials");
    }

    console.log(json);
  }
  const onChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }
  return (
    <Container>
      <Col lg={8} className='mx-auto shadow mt-5 p-4 rounded-rounded-3'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" value={login.email} onChange={onChange} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" value={login.password} onChange={onChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Container>
  )
}

export default Login

import React from 'react'
import { Container, Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router-dom'

const Header = () => {
  let history = useHistory();
  const handelLogout = () => {
    localStorage.removeItem('token');
    history.push('/login');
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">iNotebook</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={NavLink} exact activeClassName="active" to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} activeClassName="active" to="/about">About</Nav.Link>

            </Nav>
            {
              !localStorage.getItem('token') ? <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button as={NavLink} to='/login' className='mx-1' variant="info">Login</Button>
                <Button as={NavLink} to='/signup' className='mx-1' variant="primary">Signup</Button>
              </Form>
                :
                <Button onClick={handelLogout} className='mx-1' variant="primary">Logout</Button>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header

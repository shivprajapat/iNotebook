import React, { useContext } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import noteContext from '../context/notes/noteContext'
export const Home = () => {

  const context = useContext(noteContext)

  const { notes, setNotes } = context;

  console.log(context);
  return (
    <section>
      <Container>
        <Row>
          <Col lg={10} className='mx-auto shadow mt-5 p-4 rounded-rounded-3'>
            <h2>Add a Note</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />

              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          {
            notes.map((note) => {
              return (<p>{note.title}</p>)
            })
          }
        </Row>
      </Container>
    </section>
  )
}
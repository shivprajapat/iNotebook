import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import noteContext from '../context/notes/noteContext'
import Notes from './Notes'
export const Home = () => {
  const context = useContext(noteContext)
  console.log(context);
  return (
    <section>
      <Container>
        <Row>
          <Notes />
        </Row>
      </Container>
    </section >
  )
}
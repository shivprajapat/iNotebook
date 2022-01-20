import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import noteContext from '../context/notes/noteContext'
import Notes from './Notes'
export const Home = ({ showAlert }) => {
  const context = useContext(noteContext)
  return (
    <section>
      <Container>
        <Row>
          <Notes showAlert={showAlert} />
        </Row>
      </Container>
    </section >
  )
}
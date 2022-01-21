import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import Notes from './Notes'
export const Home = ({ showAlert }) => {
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
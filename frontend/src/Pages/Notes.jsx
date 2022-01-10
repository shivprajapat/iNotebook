import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from '../components/Noteitem';
import { Col, Row } from 'react-bootstrap';


const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <Row>
      <h2>You Notes</h2>
      {notes.map((note) => {
        return (
          <Col lg={3} md={6} className='mb-3' key={note} >
            <Noteitem note={note} />
          </Col>
        )
      })}
    </Row>
  )
}

export default Notes
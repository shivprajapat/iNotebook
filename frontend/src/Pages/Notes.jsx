import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from '../components/Noteitem';
import { Col, Row } from 'react-bootstrap';
import AddNote from '../components/AddNote';


const Notes = () => {
  const context = useContext(noteContext);
  const { notes } = context;
  return (
    <>
      <AddNote />
      <Col lg={12} className='mx-auto shadow mt-5 p-4 rounded-lg'>
        <h2>You Notes</h2>
        <Row>
          {notes.map((note) => {
            return (
              <Col lg={4} md={6} className='mb-3' key={note} >
                <Noteitem note={note} />
              </Col>
            )
          })}
        </Row>
      </Col>
    </>
  )
}

export default Notes
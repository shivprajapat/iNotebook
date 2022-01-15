import React, { useEffect, useState, useContext } from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from '../components/Noteitem';
import { Col, Row, Modal, Form, Button } from 'react-bootstrap';
import AddNote from '../components/AddNote';


const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    getNotes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [show, setShow] = useState(false);
  const [note, setNote] = useState({ etitle: "", edescription: "", etag: "" })

  const handleClose = () => setShow(false);
  const handleShow = (currentNote) => {
    setShow(true)
    setNote({ etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
  }
  const handleClick = (e) => {
    console.log("Updating the note...", note)
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag)
  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <>
      <AddNote />
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="etitle" value={note.etitle} onChange={onChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="edescription" value={note.edescription} onChange={onChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tag</Form.Label>
              <Form.Control type="text" name="etag" value={note.etag} onChange={onChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Update Note
          </Button>
        </Modal.Footer>
      </Modal>

      <Col lg={12} className='mx-auto shadow mt-5 p-4 rounded-lg'>
        <h2>You Notes</h2>
        <Row>
          {notes.map((note) => {
            return (
              <Col lg={4} md={6} className='mb-3' key={note} >
                <Noteitem handleShow={handleShow} note={note} />
              </Col>
            )
          })}
        </Row>
      </Col>
    </>
  )
}

export default Notes
import React, { useEffect, useState, useContext } from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from '../components/Noteitem';
import { Col, Row, Modal, Form, Button } from 'react-bootstrap';
import AddNote from '../components/AddNote';


const Notes = ({ showAlert }) => {
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
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })

  }
  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag)
    setShow(false);
    showAlert("Update Successfully", 'success');
  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <>
      <AddNote showAlert={showAlert} />
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="etitle" value={note.etitle} onChange={onChange} minLength={5} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tag</Form.Label>
              <Form.Control type="text" name="etag" value={note.etag} onChange={onChange} minLength={5} required />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick} disabled={note.etitle.length < 5 || note.edescription.length < 5}>
            Update Note
          </Button>
        </Modal.Footer>
      </Modal>

      <Col lg={12} className='mx-auto shadow mt-5 p-4 rounded-lg'>
        <h2>You Notes</h2>
        <Row>
          {
            notes.length === 0 && 'No notes to display'
          }
          {notes.map((note) => {
            return (
              <Col lg={4} md={6} className='mb-3' key={note} >
                <Noteitem handleShow={handleShow} showAlert={showAlert} note={note} />
              </Col>
            )
          })}
        </Row>
      </Col>
    </>
  )
}

export default Notes
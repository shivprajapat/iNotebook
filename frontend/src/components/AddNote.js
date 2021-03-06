import React, { useState, useContext } from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import noteContext from '../context/notes/noteContext';

const AddNote = ({ showAlert }) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" })

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" })
    showAlert("Added Successfully", 'success');

  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <Col lg={8} className='mx-auto shadow mt-5 p-4 rounded-rounded-3'>
      <h2>Add a Note</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" value={note.title} onChange={onChange} minLength={5} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" name="description" value={note.description} onChange={onChange} minLength={5} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Tag</Form.Label>
          <Form.Control type="text" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleClick} disabled={note.title.length < 5 || note.description.length < 5}>
          Add Note
        </Button>
      </Form>
    </Col>
  )
}

export default AddNote
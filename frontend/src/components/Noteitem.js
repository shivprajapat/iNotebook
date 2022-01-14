import React from 'react'
import { useContext } from 'react';
import { Button, Card } from 'react-bootstrap'
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import noteContext from '../context/notes/noteContext';
const Noteitem = (props) => {
  const { note, handleShow } = props;
  const context = useContext(noteContext);
  const { deleteNote } = context;

  return (
    <Card className='shadow-sm border-border-1 border-border-warning'>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Title>{note.title}</Card.Title>
          <div>
            <Button variant='danger' className='mx-1' onClick={() => { deleteNote(note._id) }}>
              <FaTrashAlt size={22} />
            </Button>
            <Button variant='info' className='mx-1' onClick={() => handleShow(note)}>
              <FaEdit size={22} color='white' />
            </Button>
          </div>
        </div>
        <Card.Text>{note.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Noteitem

import React from 'react'
import { Card } from 'react-bootstrap'

const Noteitem = (props) => {
  const { note } = props;

  return (
    <Card className='shadow-sm border-border-1 border-border-warning'>
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>{note.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Noteitem

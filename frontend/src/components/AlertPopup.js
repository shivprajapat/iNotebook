import React from 'react'
import { Alert } from 'react-bootstrap'

const AlertPopup = ({ message }) => {
  return (
    <Alert variant='info'>
      {message}
    </Alert>
  )
}

export default AlertPopup

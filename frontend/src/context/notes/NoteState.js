import React, { useState } from 'react'
import NoteContext from './noteContext'
const NoteState = (props) => {

  const notesInitial = [
    {
      "_id": "61d7114288da042c177e3dd0",
      "user": "61d1c04577e3c24e02631827",
      "title": "Hello Title update",
      "description": "Please wake up early update",
      "tag": "personal",
      "date": "2022-01-06T15:56:50.486Z",
      "__v": 0
    },
    {
      "_id": "61d711b588da042c177e3ddd",
      "user": "61d1c04577e3c24e02631827",
      "title": "Hello Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2022-01-06T15:58:45.214Z",
      "__v": 0
    },
    {
      "_id": "61d711b588da042c177e3ddf",
      "user": "61d1c04577e3c24e02631827",
      "title": "Hello Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2022-01-06T15:58:45.857Z",
      "__v": 0
    },
    {
      "_id": "61d714da3198fe4e2adcedfa",
      "user": "61d1c04577e3c24e02631827",
      "title": "Hello Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2022-01-06T16:12:10.416Z",
      "__v": 0
    },
    {
      "_id": "61d716f973729a8bde73b1fd",
      "user": "61d1c04577e3c24e02631827",
      "title": "Hello React",
      "description": "Code with Herry",
      "tag": "Youtube",
      "date": "2022-01-06T16:21:13.276Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(notesInitial)
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState

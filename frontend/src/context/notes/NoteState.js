import React, { useState } from 'react'
import NoteContext from './noteContext'
const NoteState = (props) => {
  const host = "http://localhost:5000"

  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes

  const getNotes = async () => {
    // Api Coll

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkMWMwNDU3N2UzYzI0ZTAyNjMxODI3In0sImlhdCI6MTY0MTQ3OTI2OH0.0BxxPgG1VRDAn6J1-oCglhzu2NTD6kolKIp6MZ6pZjk"
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json)
  }

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call

    // Api Coll

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkMWMwNDU3N2UzYzI0ZTAyNjMxODI3In0sImlhdCI6MTY0MTQ3OTI2OH0.0BxxPgG1VRDAn6J1-oCglhzu2NTD6kolKIp6MZ6pZjk"
      },
      body: JSON.stringify(title, description, tag)
    });
    const json = response.json();
    const note = {
      "_id": "61d716f973729a8bde73b1fd1234",
      // "user": "61d1c04577e3c24e02631827",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-01-06T16:21:13.276Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }

  // Delete a Note
  const deleteNote = (id) => {
    console.log('delete=> ', id);
    const newNotes = notes.filter((note) => note._id !== id)
    setNotes(newNotes);
  }
  // Edit a Note
  const editNote = async (id, title, description, tag) => {

    // Api Coll

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkMWMwNDU3N2UzYzI0ZTAyNjMxODI3In0sImlhdCI6MTY0MTQ3OTI2OH0.0BxxPgG1VRDAn6J1-oCglhzu2NTD6kolKIp6MZ6pZjk"
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = response.json();



    // Logic to edit in client

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;

      }

    }
  }
  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, editNote, getNotes, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState

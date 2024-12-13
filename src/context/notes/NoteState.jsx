import { useState } from "react";
import NoteContext from "./noteContext";
import React from "react";
import { useAlert } from '../alerts/alertContext'

const NoteState = ({ children }) => {
  const alert = useAlert()
  const host = "http://localhost:8080"
  const intialNotes = []
  const [notes, setNotes] = useState(intialNotes);

  // Fetch All Notes
  const fetchAllNote = async () => {
    // API call
    const url = `${host}/notes/fetchallnotes`
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0NDUwMjliZjQ0NjA1ODhhNzVhYmJkIiwibmFtZSI6InNoeWFtIn0sImlhdCI6MTczMjU5NzUwOX0.xIQ8sXHY4kelP8ZqQC8LPPQ_iajzYmXBBlwYEpnLIzM"
      }
    });
    const json = await response.json();
    setNotes(json)
  }

  // Add Notes
  const addNote = async (title, description, tag) => {
    // API call
    const url = `${host}/notes/createnote`
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0NDUwMjliZjQ0NjA1ODhhNzVhYmJkIiwibmFtZSI6InNoeWFtIn0sImlhdCI6MTczMjU5NzUwOX0.xIQ8sXHY4kelP8ZqQC8LPPQ_iajzYmXBBlwYEpnLIzM"
      },
      body: JSON.stringify({ title, description, tag }),
    });

    //client side logic
    const note = await response.json()
    setNotes(notes.concat(note))
  }

  //Update Notes
  const updateNote = async (id, title, description, tag) => {

    // API call
    const url = `${host}/notes/updatenote/${id}`
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0NDUwMjliZjQ0NjA1ODhhNzVhYmJkIiwibmFtZSI6InNoeWFtIn0sImlhdCI6MTczMjU5NzUwOX0.xIQ8sXHY4kelP8ZqQC8LPPQ_iajzYmXBBlwYEpnLIzM"
      },
      body: JSON.stringify({ title, description, tag }),
    });

    // Logic for client side 
    let newNotes = JSON.parse(JSON.stringify(notes))
    newNotes.map((note) => {
      if (note._id === id) {
        note.title = title
        note.description = description
        note.tag = tag
      }
    })
    setNotes(newNotes)
  }

  // Delete Notes
  const deleteNote = async (id) => {
    // client side logic
    alert.success("Note Deleted Successfully!")
    setNotes(notes.filter((note) => note._id !== id))

    // API call
    const url = `${host}/notes/deletenote/${id}`
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0NDUwMjliZjQ0NjA1ODhhNzVhYmJkIiwibmFtZSI6InNoeWFtIn0sImlhdCI6MTczMjU5NzUwOX0.xIQ8sXHY4kelP8ZqQC8LPPQ_iajzYmXBBlwYEpnLIzM"
      }
    });
    const json = await response.json()
    console.log(json)
  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, fetchAllNote, addNote, updateNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteState;

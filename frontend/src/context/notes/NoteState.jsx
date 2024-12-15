import { useState } from "react";
import NoteContext from "./noteContext";
import React from "react";
import { useAlert } from '../alerts/alertContext'

const NoteState = ({ children }) => {
  const alert = useAlert()
  const host = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}`
  const intialNotes = []
  const [notes, setNotes] = useState(intialNotes);

  // Fetch All Notes
  const fetchAllNote = async () => {
    // API call
    const url = `${host}/fetchallnotes`
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      }
    });
    const json = await response.json();
    setNotes(json)
  }

  // Add Notes
  const addNote = async (title, description, tag) => {
    // API call
    const url = `${host}/createnote`
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
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
    const url = `${host}/updatenote/${id}`
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
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
    const url = `${host}/deletenote/${id}`
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      }
    });
  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, fetchAllNote, addNote, updateNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteState;

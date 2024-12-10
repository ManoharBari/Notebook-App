import React, { useContext } from 'react'
import { Pencil, Trash2 } from "lucide-react"
import NoteContext from "../context/notes/noteContext"
import "../App.css"

function Notesitem({ note }) {
    const { deleteNote } = useContext(NoteContext)
    return (
        <div className="card m-1 col-md-3">
            <div className="card-header">{note.tag}</div>
            <div className="card-body">
                <div className="d-flex">
                    <h5 className="card-title">{note.title}</h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span> <Trash2 onClick={() => { deleteNote(note._id) }} />&nbsp;&nbsp;&nbsp;<Pencil /></span>
                </div>
                <p className="card-text">{note.description}</p>
            </div>
        </div>
    )
}

export default Notesitem

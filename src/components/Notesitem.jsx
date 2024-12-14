import React, { useContext, useState } from 'react'
import { Pencil, Trash2 } from "lucide-react"
import NoteContext from "../context/notes/noteContext"
import "../styles/Notes.css"

function Notesitem({ note, editNote }) {
    const { deleteNote } = useContext(NoteContext)
    return (
        <>
            <div className="noteItem">
                <div className="noteContent">
                    <div className="title">
                        <h3 className="noteTitle">{note.title}</h3>
                        <div className="action">
                            <span className='editbtn' onClick={() => { editNote(note) }}> <Pencil size={16}  /> </span>
                            <span className='delbtn' onClick={() => { deleteNote(note._id) }}> <Trash2 size={16} /> </span>
                        </div>
                    </div>
                    <p className="notePreview">{note.description}</p>
                    <div className="noteMeta">
                        <div className="tags">
                            <span className="tag">{note.tag}</span>
                        </div>
                        <time className="timestamp">{`Created At ${note.date.slice(0, 10)}, ${note.date.slice(11, 19)}`}</time>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notesitem

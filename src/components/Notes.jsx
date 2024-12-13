import React, { useContext, useEffect, useRef, useState } from 'react'
import Notesitem from './Notesitem'
import NoteContext from '../context/notes/noteContext';
import { useAlert } from '../context/alerts/alertContext'
import { useNavigate } from 'react-router-dom'

function Notes() {
    const navigate = useNavigate()
    const alert = useAlert()
    const { notes, fetchAllNote, updateNote } = useContext(NoteContext);
    const refOpen = useRef(null)
    const refClose = useRef(null)

    useEffect(() => {
        if (localStorage.getItem("token")) {
            fetchAllNote()
        } else {
            navigate("/login")
        }

    }, [])

    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        updateNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click()
        alert.success("Note Updated Successfully!")
    }

    const editNote = (currenNote) => {
        setNote({ id: currenNote._id, etitle: currenNote.title, edescription: currenNote.description, etag: currenNote.tag })
        refOpen.current.click()
    }
    return (
        <>
            <button type="button" ref={refOpen} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#editModal">
            </button>

            <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="editModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3 my-4">
                                    <label htmlFor="Title" className="form-label">Title</label>
                                    <input type="text" className="form-control" value={note.etitle} name='etitle' id="Title" onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">Description</label>
                                    <input type="text" className="form-control" value={note.edescription} name='edescription' id="Description" onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Label" className="form-label">Tag</label>
                                    <input type="text" className="form-control" value={note.etag} name='etag' id="Label" onChange={handleChange} required />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={handleSubmit} className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row notes my-5">
                <h3>My Notes</h3>
                {notes.map((note, index) => {
                    return <Notesitem note={note} editNote={editNote} key={index} />
                })}
            </div>
        </>
    )
}

export default Notes

import React, { useContext, useEffect, useRef, useState } from 'react'
import Notesitem from './Notesitem'
import NoteContext from '../context/notes/noteContext';
import { useAlert } from '../context/alerts/alertContext'
import { useNavigate } from 'react-router-dom'
import "../styles/Addnotes.css"

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
                                <div className="update-editor">
                                    <input
                                        type="text"
                                        placeholder="Note Title"
                                        className="titleInput"
                                        name='etitle'
                                        value={note.etitle}
                                        onChange={handleChange}
                                        required
                                    />
                                    <textarea
                                        placeholder="Start typing your note here..."
                                        className="contentInput"
                                        name='edescription'
                                        value={note.edescription}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="tagsSection">
                                        <input
                                            type="text"
                                            placeholder="Add a tag"
                                            className="tagInput"
                                            name='etag'
                                            value={note.etag}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="action-btn upbtn-close" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={handleSubmit} className="action-btn upbtn-save">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <aside className="sidebar">
                <div className="header">
                    <h2 className="heading">Your Notes</h2>
                </div>
                {notes.length === 0 && <div className="error">
                   Nothing to display
                </div>}
                <div className="notesList">
                    {notes.map((note, index) => {
                        return <Notesitem note={note} editNote={editNote} key={index} />
                    }
                    )}
                </div>
            </aside>
        </>
    )
}

export default Notes

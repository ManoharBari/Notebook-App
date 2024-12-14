import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/noteContext'
import { useAlert } from '../context/alerts/alertContext'

function Addnotes() {
    const { addNote } = useContext(NoteContext)
    const alert = useAlert()
    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
        setNote({ title: "", description: "", tag: "" })
        alert.success("Note Added Successfully!");
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 my-4">
                        <h3>Add Notes</h3>
                        <label htmlFor="Title" className="form-label">Title</label>
                        <input type="text" className="form-control" name='title' value={note.title} id="Title" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Description" className="form-label">Description</label>
                        <input type="text" className="form-control" name='description' value={note.description} id="Description" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Label" className="form-label">Tag</label>
                        <input type="text" className="form-control" name='tag' value={note.tag} id="Label" onChange={handleChange} required />
                    </div>

                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
        </>
    )
}

export default Addnotes

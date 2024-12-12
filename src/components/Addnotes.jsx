import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/noteContext'

function Addnotes() {
    const { addNote } = useContext(NoteContext)
    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
        setNote({ title: "", description: "", tag: "" })
    }
    return (
        <div className="container">
            <form>
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

                <button type="submit" disabled={note.title.length < 2 || note.description.length < 3} className="btn btn-primary" onClick={handleSubmit}>Add</button>
            </form>
        </div>
    )
}

export default Addnotes

import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/noteContext'
import { useAlert } from '../context/alerts/alertContext'
import { Save } from 'lucide-react'
import "../styles/Addnotes.css"

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
                    <div className="editor">
                        <input
                            type="text"
                            placeholder="Note Title"
                            className="titleInput"
                            name='title'
                            value={note.title}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            placeholder="Start typing your note here..."
                            className="contentInput"
                            name='description'
                            value={note.description}
                            onChange={handleChange}
                            required
                        />
                        <div className="tagsSection">
                            <input
                                type="text"
                                placeholder="Add a tag"
                                className="tagInput"
                                name='tag'
                                value={note.tag}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="actions">
                            <button className="saveButton" type="submit">
                                <Save size={16} />
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Addnotes

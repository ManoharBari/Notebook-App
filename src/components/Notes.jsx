import React, { useContext } from 'react'
import Notesitem from './Notesitem'
import NoteContext from '../context/notes/noteContext';

function Notes() {
    const context = useContext(NoteContext);
    const { notes } = context;
    return (
        <div className="row notes my-5">
            <h3>My Notes</h3>
            {notes.map((note, index) => {
                return <Notesitem note={note} key={index} />
            })}
        </div>
    )
}

export default Notes

import React from 'react'
import Notesitem from './Notesitem'

function Notes({notes}) {
    return (
        <div className="row notes my-5">
            <h3>My Notes</h3>
            {notes.map((note) => {
                return <Notesitem note={note}/>
            })}
        </div>
    )
}

export default Notes

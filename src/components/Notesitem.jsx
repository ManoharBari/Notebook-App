import React from 'react'

function Notesitem({ note }) {
    return (
        <div className="card m-2 w-25">
            <div className="card-header">{note.tag}</div>
            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description}</p>
            </div>
        </div>
    )
}

export default Notesitem

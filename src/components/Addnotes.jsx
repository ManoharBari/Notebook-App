import React, { useContext, useState } from 'react'

function Addnotes() {
   
    return (
        <div className="container">
            <form>
                <div className="mb-3 my-4">
                    <h3>Add Notes</h3>
                    <label htmlFor="Title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="Title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="Description" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Label" className="form-label">Label</label>
                    <input type="text" className="form-control" id="Label" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Addnotes

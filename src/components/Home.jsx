import React from 'react'
import Notes from './Notes';
import Addnotes from './Addnotes';

function Home() {

    return (
        <>
            <div style={{ display: "flex" }}>
                <Notes />
                <Addnotes />
            </div>
        </>
    )
}

export default Home

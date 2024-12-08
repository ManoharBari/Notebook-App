import React from 'react'
import Notes from './Notes';
import Addnotes from './Addnotes';

function Home() {

    return (
        <>
            <div className="container">
                <Addnotes />
                <Notes  />
            </div>
        </>
    )
}

export default Home

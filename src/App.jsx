import React from 'react'
import Home from './components/home'
import About from './components/about'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import NoteContext from './context/notes/NoteState';

function App() {
  return (
    <>
      <NoteContext>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>
      </NoteContext>
    </>
  )
}

export default App

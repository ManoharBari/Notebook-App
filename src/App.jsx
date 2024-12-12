import React from 'react'
import Home from './components/home'
import About from './components/about'
import Login from './components/Login';
import SignUp from './components/signUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import NoteContext from './context/notes/NoteState';
import UserContext from './context/user/userContext';

function App() {
  return (
    <>
      <UserContext>
        <NoteContext>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} />
            </Routes>
          </Router>
        </NoteContext>
      </UserContext>
    </>
  )
}

export default App

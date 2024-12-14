import React from 'react'
import Home from './components/home'
import Login from './components/Login';
import SignUp from './components/signUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import NoteProvider from './context/notes/NoteState';
import UserProvider from './context/user/UserState';
import { AlertProvider } from './context/alerts/alertContext';

function App() {
  return (
    <>
      <AlertProvider>
        <Router>
          <NoteProvider >
            <UserProvider >
              <Navbar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<SignUp />} />
              </Routes>
            </UserProvider >
          </NoteProvider >
        </Router>
      </AlertProvider>
    </>
  )
}

export default App

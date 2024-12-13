import { LogOut } from 'lucide-react';
import React from 'react'
import { Link, useLocation } from 'react-router'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    const location = useLocation();

    const Logout = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">NoteDown</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>

                    </ul>

                    {!localStorage.getItem("token") ?
                        <div>
                            <Link to="/login" className='btn btn-outline-primary mx-2' type='button'>Login</Link>
                            <Link to="/signup" className='btn btn-primary' type='button'>Signup</Link>
                        </div> : <button onClick={Logout} className='btn btn-primary'><LogOut size={20} /> Logout</button>}

                </div>
            </div>
        </nav >
    )
}

export default Navbar

import React, { useContext, useState } from 'react'
import UserContext from '../context/user/userContext'
import { UserPlus } from 'lucide-react'
import { Link } from 'react-router'
import "../styles/login.css"

function signUp() {
    const { userSignup } = useContext(UserContext)
    const [user, setUser] = useState({ name: "", email: "", password: "", confirmpassword: "" })

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        userSignup(user.name, user.email, user.password, user.confirmpassword)
        setUser({ name: "", email: "", password: "", confirmpassword: "" })
    }
    return (
        <div className="contain">
            <div className="formWrapper">
                <h1 className="title">Register for Note Down</h1>
                <form onSubmit={handleSubmit} className="form">
                    <div className="inputGroup">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={user.name}
                            onChange={handleChange}
                            className="input"
                            required
                        />
                    </div>
                    <div className="inputGroup">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={user.email}
                            onChange={handleChange}
                            className="input"
                            required
                        />
                    </div>
                    <div className="inputGroup">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={user.password}
                            onChange={handleChange}
                            className="input"
                            required
                        />
                    </div>
                    <div className="inputGroup">
                        <input
                            type="password"
                            name="confirmpassword"
                            placeholder="Confirm Password"
                            value={user.confirmpassword}
                            onChange={handleChange}
                            className="input"
                            required
                        />
                    </div>
            
                    <button type="submit" className="button">
                        <UserPlus size={16} />
                        <span>Sign Up</span>
                    </button>
                </form>
                <p className="switchPrompt">
                    Already have an account? <Link to="/login" className="switchLink">Log in</Link>
                </p>
            </div>
        </div>
    )
}

export default signUp

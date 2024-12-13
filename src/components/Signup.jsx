import React, { useContext, useState } from 'react'
import UserContext from '../context/user/userContext'

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
        <div className="container my-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' value={user.name} id="name" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name='email' value={user.email} id="email" aria-describedby="emailHelp" onChange={handleChange} required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={user.password} id="password" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                    <input type="text" className="form-control" name='confirmpassword' value={user.confirmpassword} id="confirmpassword" onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
        </div>
    )
}

export default signUp

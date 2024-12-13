import React, { useContext, useState } from 'react'
import UserContext from '../context/user/userContext'

function Login() {
  const { userLogin } = useContext(UserContext)
  const [credentials, setCredentials] = useState({ email: "", password: "" })

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    userLogin(credentials.email, credentials.password)
    setCredentials({ email: "", password: "" })
  }
  return (
    <div className='container my-5'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name='email' value={credentials.email} aria-describedby="emailHelp" onChange={handleChange} required/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name='password' value={credentials.password} id="password" onChange={handleChange} required/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="checkbox" />
          <label className="form-check-label" htmlFor="checkbox">Remember me</label>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}

export default Login

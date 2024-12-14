import React, { useContext, useState } from 'react'
import UserContext from '../context/user/userContext'
import { LogIn } from 'lucide-react'
import { Link } from 'react-router'
import "../styles/login.css"

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
    <>
      <div className="contain">
        <div className="formWrapper">
          <h1 className="title">Continue to Note Down</h1>
          <form onSubmit={handleSubmit} className="form">
            <div className="inputGroup">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={credentials.email}
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
                value={credentials.password}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <button type="submit" className="button">
              <LogIn size={16} />
              <span>Login</span>
            </button>
          </form>
          <p className="switchPrompt">
            Don't have an account? <Link to="/signup" className="switchLink">Sign up</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login

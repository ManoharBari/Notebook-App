import React from 'react'
import UserContext from './userContext'
import { useNavigate } from 'react-router-dom'
import { useAlert } from '../alerts/alertContext'

function UserState({ children }) {
    const alert = useAlert()
    const host = "http://localhost:8080"
    const navigate = useNavigate()

    // Signup User
    const userSignup = async (name, email, password, confirmpassword) => {
        try {
            // API call
            const url = `${host}/auth/signup`
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
            });
            const json = await response.json();
            console.log(json)
            // store auth token and redirect
            if (password !== confirmpassword) {
                alert.error("password and confirm must be same")
            } else {
                alert.success(json.msg)
                localStorage.setItem("token", json.authtoken)
                navigate('/');
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    // Login User
    const userLogin = async (email, password) => {
        try {
            // API call
            const url = `${host}/auth/login`
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const json = await response.json();
            console.log(json)
            if (json.success !== "true") {
                alert.error(json.msg)

            } else {
                // store auth token and redirect
                alert.success("Login Successfully")
                localStorage.setItem("token", json.authtoken)
                navigate('/');
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <UserContext.Provider value={{ userLogin, userSignup }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserState

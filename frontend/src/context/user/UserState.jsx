import React, { useState } from 'react'
import UserContext from './userContext'
import { useNavigate } from 'react-router-dom'
import { useAlert } from '../alerts/alertContext'

function UserState({ children }) {
    const alert = useAlert()
    const host = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}`
    const navigate = useNavigate()
    const [user, setUser] = useState({})

    // Signup User
    const userSignup = async (name, email, password, confirmpassword) => {
        try {
            // API call
            const url = `${host}/signup`
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
            });
            const json = await response.json();
            // store auth token and redirect
            if (password !== confirmpassword) {
                alert.error("Password and confirm password must be same")
            } else {
                if (json.authtoken) {
                    alert.success(json.msg)
                    localStorage.setItem("token", json.authtoken)
                    navigate('/');
                } else {
                    alert.info(json.msg)
                    navigate("/login")
                }
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    // Login User
    const userLogin = async (email, password) => {
        try {
            // API call
            const url = `${host}/login`
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const json = await response.json();
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

    // Get User
    const getUser = async () => {
        try {
            // API call
            const url = `${host}/getuser`
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                }
            });
            const json = await response.json();
            setUser(json)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <UserContext.Provider value={{ userLogin, userSignup, getUser, user }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserState

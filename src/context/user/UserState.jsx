import React from 'react'
import UserContext from './userContext'
import { useHistory } from "react-router-dom";

function UserState(props) {
    let history = useHistory();
    const host = "http://localhost:8080"

    // Login User
    const userLogin = async (email, password) => {
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
        if (!json.success) {
            alert("Login with correct credentials")
        }
        history.push("/");
    }
    return (
        <UserContext.Provider value={{ userLogin }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState

"use client";

import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [successMsg, setSuccessMsg] = useState(null)
    const [errorMsgs, setErrorMsgs] = useState(null)
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)
    const submitHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const username = formData.get("username")
        const password = formData.get("password")
        const res = await fetch("http://localhost:8000/api/token-auth", {
            "method": "POST",
            "body": JSON.stringify({
                username,
                password
            }),
            "headers": {
                "Content-Type": "application/json"
            }
        })
        const resData = await res.json()
        if (res.ok) {
            localStorage.setItem("user_token", resData.token)
            location.href = "/mytodos"
        } else {
            const errorList = Object.values(resData).flatMap((errors) => errors.map((error) => `${error}`))
            const errorString = errorList.join("\n")
            setErrorMsgs()
            setShowError(true)
            setShowSuccess(false)
            setSuccessMsg(errorString)
            setErrorMsgs(errorString)
        }
    }
    return (
        <div className="col-5">
            <h3>Login</h3>
            <hr />
            <form className="mt-3" onSubmit={submitHandler}>
                {showSuccess === true && <div class="alert alert-success" role="alert">
                    {successMsg}
                </div>}
                {showError === true && <div class="alert alert-danger" role="alert">
                    {errorMsgs}
                </div>}
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" required id="username" name="username" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input type="password" className="form-control" required id="Password" name="password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Login
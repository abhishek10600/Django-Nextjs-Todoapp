"use client";

import { useState } from "react";

const Signup = () => {
    const [successMsg, setSuccessMsg] = useState(null)
    const [errorMsgs, setErrorMsgs] = useState(null)
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)
    const submitHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const first_name = formData.get("f_name")
        const last_name = formData.get("l_name")
        const username = formData.get("username")
        const password = formData.get("password")

        //send data to backend server
        try {
            const res = await fetch("http://localhost:8000/api/users", {
                "method": "POST",
                "body": JSON.stringify({
                    first_name,
                    last_name,
                    username,
                    password
                }),
                "headers": {
                    "Content-Type": "application/json"
                }
            })
            if (res.ok) {
                setSuccessMsg("Thank you for registering with us!")
                setShowSuccess(true)
                setShowError(false)
                setErrorMsgs([])
            } else {
                const resData = await res.json()
                const errorList = Object.values(resData).flatMap((errors) => errors.map((error) => `${error}`))
                const errorString = errorList.join("\n")
                setErrorMsgs()
                setShowError(true)
                setShowSuccess(false)
                setSuccessMsg(errorString)
                setErrorMsgs(errorString)
            }
        } catch (error) {
        }
    }
    return (
        <div className="col-5 offset-2">
            <h3>Sign Up</h3>
            <hr />
            <form className="mt-3" onSubmit={submitHandler}>
                {showSuccess === true && <div class="alert alert-success" role="alert">
                    {successMsg}
                </div>}
                {showError === true && <div class="alert alert-danger" role="alert">
                    {errorMsgs}
                </div>}
                <div className="row">
                    <div className="col-6">
                        <div className="mb-3">
                            <label htmlFor="f_name" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="f_name" required name="f_name" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                            <label htmlFor="l_name" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="l_name" required name="l_name" />
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" required name="username" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="Password" required name="password" />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup
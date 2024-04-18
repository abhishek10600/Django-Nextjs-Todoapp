"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

function Header() {
    const [Logout, setLogout] = useState(false)
    const userToken = localStorage.getItem("user_token")
    useEffect(() => {
        if (userToken) {
            setLogout(true)
        } else {
            setLogout(false)
        }
    }, [])

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container">
                <Link className="navbar-brand" href="/">Todo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        {Logout ? <Link className="nav-link" href="/logout">Logout</Link> : <Link className="nav-link" href="/login">Login</Link>}
                        <Link className="nav-link" href="/about">About</Link>
                        {Logout && (<Link className="nav-link" href="/mytodos">Todos</Link>)}
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Header

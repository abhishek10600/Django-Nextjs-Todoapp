"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"


const EditTodo = () => {
    const params = useParams();
    const id = params.id
    const [title, setTitle] = useState("")
    const getTodoById = async (id) => {
        const res = await fetch(`http://localhost:8000/api/todos/${id}/`)
        const resData = await res.json()
        setTitle(resData.title)
    }
    useEffect(() => {
        getTodoById(id)
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append("title", title)
        const res = await fetch(`http://localhost:8000/api/todos/${id}/`, {
            "method": "PATCH",
            "body": JSON.stringify({
                title
            }),
            "headers": {
                "Content-Type": "application/json"
            }
        })
        if (res.ok) {
            location.href = "/mytodos"
        }
    }

    return (
        <div className="container my-5">
            <h3>Update your todo</h3>
            <form className="my-4" onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="title" class="form-label">Todo Title</label>
                    <input type="text" class="form-control" id="title" name="title" value={title} onChange={(ev) => setTitle(ev.target.value)} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default EditTodo
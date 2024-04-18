"use client"

import Link from "next/link";
import { useEffect, useState } from "react"

const TodoList = () => {
    const [TodoList, setTodoList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://localhost:8000/api/todos/")
            const resData = await res.json()
            console.log(resData)
            setTodoList(resData);
        }
        fetchData()
    }, [])

    const handleStatusUpdateTask = async (item) => {
        const res = await fetch(`http://localhost:8000/api/todos/${item.id}/`, {
            "method": "PATCH",
            "body": JSON.stringify({
                "status": item.status ? false : true,

            }),
            "headers": {
                "Content-Type": "application/json"
            }
        })
        const resData = await res.json()
        console.log(resData)
    }

    const handleDeleteTask = async (item_id) => {
        const res = await fetch(`http://localhost:8000/api/todos/${item_id}/`, {
            "method": "DELETE"
        })
    }

    return (
        TodoList.map((item, index) => (
            <tr key={index}>
                <td className={item.status ? "text-success" : "text-dark"}>
                    {item.status ? <span><s>{item.title}</s></span> : `${item.title}`}
                </td>
                <td>{item.created_at}</td>
                <td className="d-flex gap-4">
                    <button className="btn btn-success btn-sm" onClick={() => handleStatusUpdateTask(item)}>Done</button>
                    <Link href={`mytodos/${item.id}`}><button className="btn btn-primary btn-sm">Update</button></Link>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDeleteTask(item.id)}>Delete</button>
                </td>
            </tr >
        ))
    )
}

export default TodoList
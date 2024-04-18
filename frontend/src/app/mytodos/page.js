import Link from "next/link"
import TodoList from "../components/TodoList"


function MyTodos() {
    return (
        <main className="container-fluid py-5">
            <div className="container">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td colSpan={2}><Link href="/mytodos/create" className="btn btn-success btn-sm">Create</Link></td>
                        </tr>
                        <tr>
                            <th>Task</th>
                            <th>Created At</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TodoList />
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default MyTodos

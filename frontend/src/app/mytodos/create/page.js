"use client"

const CreateTodo = () => {
    const submitHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const title = formData.get("title")
        const res = await fetch("http://localhost:8000/api/todos/", {
            "method": "POST",
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
        <div className="container">
            <h3 className="my-5">Create your todo</h3>
            <form className="my-5" onSubmit={submitHandler}>
                <div class="mb-3">
                    <label for="title" class="form-label">Todo Title</label>
                    <input type="text" class="form-control" required id="title" name="title" />
                </div>
                <button type="submit" class="btn btn-primary">Create</button>
            </form>
        </div>
    )
}

export default CreateTodo
import Signup from '../components/Signup'
import Login from '../components/Login'

function LoginPage() {
    return (
        <main className="container-fluid py-5">
            <div className="container">
                <div className="row">
                    <Login />
                    <Signup />
                </div>
            </div>
        </main>
    )
}

export default LoginPage

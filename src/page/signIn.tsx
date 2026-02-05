import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUsersQuery } from "../utils/api";
const SignIn = () => {
    const n = useNavigate()
    const [user, setUser] = useState({ email: "", password: "" })
    const { data } = useGetUsersQuery("/users")
    function checkUser() {
        data.filter((itm: any) => {
            if (itm.Email === user.email && itm.Password === user.password) {
                localStorage.setItem("token", String(itm.id))
                localStorage.setItem("role", itm.Role)
                if (itm.Role === "teacher") {
                    n("/Teacher")
                } else {
                    n("/User")
                }
            } else {
                setUser({ email: "", password: "" })
            }
        })
    }
    return (
        <div>
            <div style={{ marginTop: 20, maxWidth: 300 }} className="w-25 shadow bg-light rounded p-3 mx-auto">
                <input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="Email..." type="text" className="form-control mb-2" />
                <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="Password..." type="text" className="form-control mb-2" />
                <button onClick={checkUser} style={{ width: 100 + "%" }} className="btn btn-dark">Sign In</button>
            </div>
        </div>
    );
}
export default SignIn;
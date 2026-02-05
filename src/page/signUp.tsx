import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAddUserMutation } from "../utils/api";
import { actions } from "../utils/toolkit";
const SignUp = (props: any) => {
    const [addUser, { }] = useAddUserMutation()
    const navigate = useNavigate()
    function signUser() {
        addUser(props.obj);
        navigate("/signIn")
    }
    return (
        <div>
            <div style={{ marginTop: 20 }} className="w-25 shadow bg-light rounded p-3 mx-auto">
                <input onChange={(e) => { props.getName(e.target.value) }} placeholder="Name..." type="text" className="form-control mb-2" />
                <input onChange={(e) => { props.getPhone(e.target.value) }} placeholder="Phone..." type="text" className="form-control mb-2" />
                <input onChange={(e) => { props.getEmail(e.target.value) }} placeholder="Email..." type="text" className="form-control mb-2" />
                <input onChange={(e) => { props.getPassword(e.target.value) }} placeholder="Password..." type="text" className="form-control mb-2" />
                {
                    props.checkPass && <p className="text-danger my-1">There should be 8 character at least </p>
                }
                <select onChange={(e) => props.getRole(e.target.value)} className="form-control mb-2">
                    <option disabled selected value="">Chouse Role</option>
                    <option value="user">User</option>
                    <option value="teacher">Teacher</option>
                </select>
                <button onClick={signUser} style={{ width: 100 + "%" }} className="btn btn-dark">Sign Up</button>
                <p className="text-center my-3">Or</p>
                <p className="text-center">if you have account? - <Link to={"/signIn"}>Sign In</Link></p>
            </div>
        </div>
    );
}
export default connect(
    (state: any) => ({ ...state.user }),
    actions
)(SignUp);
import { connect } from "react-redux";
import { actions } from "../utils/toolkit";
import { Link, useNavigate } from "react-router-dom";
import { useCourseMutation } from "../utils/api";
const TCourses = (props: any) => {
    const [addCourse, { }] = useCourseMutation()
    const navigate = useNavigate()
    function addCourses() {
        addCourse(props.obj1);
        navigate("/Teacher")
    }
    return (
        <div>
            <header className="d-flex justify-content-between align-items-center bg-white rounded shadow-sm p-3 mb-4">
                <div className="fw-bold fs-4"><Link style={{ textDecorationLine: "none" }} to={"/Teacher"}><img width={70} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3RBHLLis73dsYpEC0avXd9Bz9RCRYL8TdQ&s" /></Link></div>
                <Link to={"/Teacher"} className="btn btn-outline-primary btn-sm">Exit</Link>
            </header>
            <div style={{ marginTop: 20 }} className="w-25 shadow bg-light rounded p-3 mx-auto">
                <input onChange={(e) => props.Img(e.target.value)} placeholder="Img..." type="text" className="form-control mb-2" />
                <input onChange={(e) => props.Lesson(e.target.value)} placeholder="Lesson name..." type="text" className="form-control mb-2" />
                <input onChange={(e) => props.Dec(e.target.value)} placeholder="Des..." type="text" className="form-control mb-2" />
                <input onChange={(e) => props.Day(e.target.value)} placeholder="Created day..." type="date" className="form-control mb-2" />
                <button onClick={addCourses} style={{ width: 100 + "%" }} className="btn btn-dark">Create</button>
            </div>
        </div>
    );
}

export default connect(
    (state: any) => ({ ...state.user }),
    actions
)(TCourses);

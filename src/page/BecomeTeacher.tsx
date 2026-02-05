import { Link } from "react-router-dom";

const BecomeTeacher = () => {
    function role() {
        localStorage.setItem("role","teacher")
    }
    return (
        <div>
            <div className="col-12 col-md-4 col-lg-3 bg-white rounded shadow-sm p-3 ms-3">
                    <div className="mb-3">
                        <input placeholder="Name..." className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <input placeholder="Phone..." className="form-control"/>
                    </div>
                    <Link onClick={role} to={"/Teacher"} className="btn btn-primary w-100">Continue</Link>
            </div>
        </div>
    );
}

export default BecomeTeacher;

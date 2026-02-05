import { Link, Outlet } from "react-router-dom";

const ProfileU = () => {
    return (
        <div className="container-fluid min-vh-100 bg-light p-4">
            <div className="row g-4">
                <div className="col-12 col-md-3 col-lg-2 bg-white rounded shadow-sm p-3">
                    <div className="fw-bold mb-3">Profile Dashboard</div>
                    <div className="list-group">
                        <Link to={"/ProfileU/aboute"} className="list-group-item list-group-item-action">General</Link>
                        <Link to={"/ProfileU/BecomeTeacher"} className="list-group-item list-group-item-action">to become a teacher</Link>
                    </div>
                </div>
                <div className="col-12 col-md-9 col-lg-10 bg-white rounded shadow-sm p-4" style={{ minHeight: "60vh" }}>
                    <div className="h-100 w-100">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileU;

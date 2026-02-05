import { Link, Outlet } from "react-router-dom";

const User = () => {
    return (
        <div className="container-fluid bg-light min-vh-100 p-0">
            <div className="d-flex justify-content-between align-items-center p-3 bg-white shadow-sm border-bottom">
                <div className="fw-bold fs-4"><Link style={{ textDecorationLine: "none" }} to={"/User"}><img width={70} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3RBHLLis73dsYpEC0avXd9Bz9RCRYL8TdQ&s" /></Link></div>
                <Link to={"/signUp"} onClick={()=>localStorage.setItem("obj","")} className="btn btn-outline-primary btn-sm">Exit</Link>
            </div>
            <div className="row g-0">
                <div className="col-12 col-md-3 col-lg-2 bg-white border-end vh-100 p-3 shadow-sm">
                    <div className="mb-3 fw-semibold fs-5"><h1>Menu</h1></div>
                    <div className="list-group list-group-flush">
                        <Link to={"/User/Courses"} className="list-group-item list-group-item-action text-dark text-decoration-none">Courses</Link>
                        <Link to={"/User/Sourcecode"} className="list-group-item list-group-item-action text-dark text-decoration-none">Source code</Link>
                        <Link to={"/ProfileU"} className="list-group-item list-group-item-action text-dark text-decoration-none">Profile</Link>
                    </div>
                </div>
                <div className="col-12 col-md-9 col-lg-10 p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default User;
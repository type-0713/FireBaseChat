import { Link } from "react-router-dom"

const About1 = () => {
    let a: any = localStorage.getItem("name")
    let b = JSON.parse(a)
    let a1: any = localStorage.getItem("phone")
    let b1 = JSON.parse(a1)
    let a2: any = localStorage.getItem("email")
    let b2 = JSON.parse(a2)
    return (
        <div>
            <header className="d-flex justify-content-between align-items-center bg-white rounded shadow-sm p-3 mb-4">
                <div className="fw-bold fs-4"><Link style={{ textDecorationLine: "none" }} to={"/Teacher"}><img width={70} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3RBHLLis73dsYpEC0avXd9Bz9RCRYL8TdQ&s" /></Link></div>
                <Link to={"/Sign-Up"} className="btn btn-outline-primary btn-sm">Exit</Link>
            </header>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card shadow text-center">
                            <div className="card-body">
                                <img src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png" alt="profile" className="rounded-circle mb-3" width="120" height="120" />
                                <h4 className="card-title mb-1">{b}</h4>
                                <p className="mb-1">📧 <strong>Email:</strong>  {b2}</p>
                                <p className="mb-3">📞 <strong>Phone:</strong>  {b1}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About1;

import { Link } from "react-router-dom";
import { useCoursesQuery } from "../utils/api";

const Teacher = () => {
  const { data, isError, isLoading } = useCoursesQuery("")

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error</h2>;
  return (
    <div className="container-fluid min-vh-100 bg-light p-3 d-flex flex-column">
      <header className="d-flex justify-content-between align-items-center bg-white rounded shadow-sm p-3 mb-4">
        <div className="fw-bold fs-4"><Link style={{ textDecorationLine: "none" }} to={"/Teacher"}><img width={70} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3RBHLLis73dsYpEC0avXd9Bz9RCRYL8TdQ&s" /></Link></div>
        <Link to={"/signUp"} className="btn btn-outline-primary btn-sm">Exit</Link>
      </header>
      <div className="d-flex flex-grow-1">
        <nav className="bg-white rounded shadow-sm p-3" style={{ minWidth: "200px" }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Link to={"/ProfileT"} className="text-decoration-none text-dark">Profile</Link>
            </li>
            <li className="list-group-item">
              <Link to={"/Course"} className="text-decoration-none text-dark">Add Course</Link>
            </li>
            <li className="list-group-item">
              <Link to={"/Code"} className="text-decoration-none text-dark">Add source code</Link>
            </li>
          </ul>
        </nav>
        <main className="flex-grow-1 ms-4">
          <div>
            <div className="col-12 col-md-9 col-lg-10">
              <div className="row g-3">
                {
                  data.filter((itm: any) => itm.id === Number(localStorage.getItem("token")))
                    .map((itm: any, i: number) => {
                      return <div key={i} className="col-6 col-md-3">
                        <div className="card shadow-sm">
                          <div className="card-img-top bg-secondary-subtle d-flex align-items-center justify-content-center" style={{ height: "120px" }}>
                            <img className="card-img-top bg-secondary-subtle d-flex align-items-center justify-content-center" style={{ height: "120px" }} src={itm.Img} alt="" />
                          </div>
                          <div className="card-body text-center">
                            <div className="fw-semibold">{itm.Lesson}</div>
                          </div>
                        </div>
                      </div>
                    })
                }
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Teacher;

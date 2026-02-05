import { useNavigate } from "react-router-dom";
import { useCoursesQuery } from "../utils/api";
export const a:any =[]
const Courses = () => {
    const { data, isError, isLoading } = useCoursesQuery("")
    const n=useNavigate()

    if (isLoading) return <h2>Loading...</h2>;
    if (isError) return <h2>Error</h2>;
    function AbouteC(itm:any) {
        n("/User/Aboute")
        a.push(itm)
    }
    return (
        <div>
            <div className="col-12 col-md-9 col-lg-10">
                <div className="row g-3">
                    {
                        data.map((itm: any, i: number) => {
                            return <div onClick={()=>AbouteC(itm)} key={i} className="col-6 col-md-3">
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
    );
}

export default Courses;

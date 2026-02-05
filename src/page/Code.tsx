import { useNavigate } from "react-router-dom";
import { useCodesQuery } from "../utils/api";
export const a:any =[]
const Courses = () => {
    const { data, isError, isLoading } = useCodesQuery("")
        const n=useNavigate()
        function AbouteC(itm:any) {
            n("/User/Aboute")
            a.push(itm)
        }
    if (isLoading) return <h2>Loading...</h2>;
    if (isError) return <h2>Error</h2>;
    return (
        <div>
            <div className="col-12 col-md-9 col-lg-10">
                <div className="row g-3">
                    {
                        data.map((itm: any, i: number) => {
                            return <div onClick={()=>AbouteC(itm)} key={i} className="col-6 col-md-3">
                                <div className="card shadow-sm">
                                    <div className="card-img-top bg-secondary-subtle d-flex align-items-center justify-content-center" style={{ height: "120px" }}>
                                        <img width={200} src={itm.Img1} alt="" />
                                    </div>
                                    <div className="card-body text-center">
                                        <div className="fw-semibold">{itm.Code}</div>
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

import { Link } from "react-router-dom";
import { a } from "./Courses";
import { useEffect } from "react";

const AboutC = () => {

    useEffect(() => {
        alert("⚠️ chiqish uchun logo ustiga bosing");
    }, []);

    function del() {
        a = []
    }

    return (
        <div>
            <header className="d-flex justify-content-between align-items-center bg-white rounded shadow-sm p-3 mb-4">
                <Link
                    onClick={del}
                    style={{ textDecoration: "none" }}
                    to={"/User/Courses"}
                >
                    <img
                        width={70}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3RBHLLis73dsYpEC0avXd9Bz9RCRYL8TdQ&s"
                        alt="logo"
                    />
                </Link>
            </header>

            <div className="container my-5">
                {a.map((itm: any, i: number) => (
                    <div className="row align-items-center mb-4" key={i}>
                        <div className="col-md-5">
                            <img
                                src={itm.Img}
                                alt="about"
                                className="img-fluid rounded"
                            />
                        </div>

                        <div className="col-md-7">
                            <h3 className="mb-3">About</h3>
                            <p className="text-muted">Dec: {itm.Dec}</p>
                            <p className="text-muted">Lesson: {itm.Lesson}</p>
                            <p className="text-muted">Day: {itm.Day}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutC;

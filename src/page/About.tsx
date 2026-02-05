
const About = () => {
    let a:any =localStorage.getItem("name")
    let b =JSON.parse(a)
    let a1:any =localStorage.getItem("phone")
    let b1 =JSON.parse(a1)
    let a2:any =localStorage.getItem("email")
    let b2 =JSON.parse(a2)
    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card shadow text-center">
                            <div className="card-body">
                                <img src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png" alt="profile" className="rounded-circle mb-3" width="120" height="120"/>
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

export default About;

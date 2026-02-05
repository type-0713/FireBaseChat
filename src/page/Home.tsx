import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <nav className="p-3 d-flex justify-content-between align-items-center bg-dark" style={{ height: "110px" }}>
                <Link style={{ textDecorationLine: "none" }} to={"/"}><img width={70} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3RBHLLis73dsYpEC0avXd9Bz9RCRYL8TdQ&s" /></Link>
                <div>
                    <Link className='btn btn-primary' to={"/signUp"}>Sign Up</Link>
                </div>
            </nav>
            <div
                style={{
                    backgroundColor: "#f4f6fb",
                    padding: "80px 60px",
                    display: "flex",
                    gap: "60px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontFamily: "Arial, sans-serif",
                    height:820
                }}
            >
                <div style={{ maxWidth: "520px" }}>
                    <h1
                        style={{
                            fontSize: "60px",
                            fontWeight: "800",
                            color: "#111827",
                            marginBottom: "20px",
                        }}
                    >
                        Shift Academy
                    </h1>

                    <p
                        style={{
                            fontSize: "22px",
                            color: "#4b5563",
                            marginBottom: "16px",
                        }}
                    >
                        Bepul IT-ta’lim <br /> quyidagilarni xohlaydiganlar uchun:
                    </p>

                    <p
                        style={{
                            color: "#6d28d9",
                            fontWeight: "600",
                            marginBottom: "28px",
                        }}
                    >
                        <a href="https://www.instagram.com/shiftacademyuz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                            Instagram
                        </a>
                    </p>
                    <p
                        style={{
                            color: "#6d28d9",
                            fontWeight: "600",
                            marginBottom: "28px",
                        }}
                    >
                        <a href="https://t.me/shiftacademyuz">Telegram</a>
                    </p>

                    <Link
                        className="btn"
                        to={"/signUp"}
                        style={{
                            backgroundColor: "#4ade80",
                            border: "none",
                            borderRadius: "12px",
                            padding: "14px 32px",
                            fontSize: "16px",
                            fontWeight: "600",
                            cursor: "pointer",
                            marginBottom: "32px",
                        }}
                    >
                        O‘qishga kirishni xohlayman
                    </Link>

                    <ul
                        style={{
                            paddingLeft: "18px",
                            color: "#374151",
                            lineHeight: "1.8",
                        }}
                    >
                        <li>Ish yoki o‘qish bilan birga olib borish mumkin</li>
                        <li>Tengdosh — tengdoshga” metodikasi</li>
                        <li>Kuchli IT hamjamiyati</li>
                        <li>Ishga joylashishda yordam</li>
                    </ul>
                </div>
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3RBHLLis73dsYpEC0avXd9Bz9RCRYL8TdQ&s"
                        alt="students"
                        style={{
                            width: "520px",
                            height: "420px",
                            objectFit: "cover",
                            borderRadius: "32px",
                        }}
                    />
                </div>
            </div>
        </div >
    );
}
export default Home;
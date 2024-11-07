import one from "../assets/images/1.jpg"
import two from "../assets/images/2.jpg"
import three from "../assets/images/3.jpg"
import four from "../assets/images/4.jpg"

function Recommended() {
    return (
        <div className="recommended">
            <h1 className="recommended__title">Recommended for you</h1>
            <p>Pick the best fit</p>

            <div className="recommended__cont">
                <div className="course-card">
                    <img src={one} />
                    <h3>MERN Stack Bootcamp</h3>
                    <p>Shankarganesh B</p>
                    <p>4.8⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>

                <div className="course-card">
                    <img src={two} />
                    <h3>2024 Java Full Stack</h3>
                    <p>Shankarganesh B</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>

                <div className="course-card">
                    <img src={three} />
                    <h3>2024 Python Masterclass</h3>
                    <p>Shankarganesh B</p>
                    <p>3.9⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>

                <div className="course-card">
                    <img src={four} />
                    <h3>Master UI/UX</h3>
                    <p>Shankarganesh B</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
            </div>
        </div>
    )
}

export default Recommended
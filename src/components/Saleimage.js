import saleimage from "../assets/images/saleimage.jpeg"

function Saleimage(){
    return(
        <div className="sale-image">
        <img className="sale-image__img" src={saleimage} alt="Sale image"/>
        <div className="sale-image__offer">
            <h2>Udemy Flash Sale! 24 hours to save</h2>
            <p>Get the top Courses for just 499. Just one day to save
                but a lifetime to learn.
            </p>
        </div>
    </div>
    )
}

export default Saleimage
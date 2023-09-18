import React from "react"
import "./Contact.css"
import "bootstrap/dist/css/bootstrap.min.css"
const Contact = ({ setLoginUser }) => {
    return (

        <div className="Contact">

            <section>
                <h1 className="title">our team</h1>
                <div className="team-row">
                    <div className="member">
                        <img src={require('./images/4001px.jpg')} alt="" />
                        <h2>Kalyani Tangade</h2>
                        <p >2020BTEEN00011</p>
                        
                    </div>
                    <div className="member">
                        <img src={require('./images/4001px.jpg')} alt="" />
                        <h2>Neha Kore</h2>
                        <p>2020BTEEN00014</p>
                       
                    </div>
                    <div className="member">
                        <img src={require('./images/4001px.jpg')} alt="" />
                        <h2>Peeyush Deshpande</h2>
                        <p>2020BTEEN00027</p>
                        
                    </div>
                    <div className="member">
                        <img src={require('./images/profile_photo4.jpg')}alt="" />
                        <h2>Nilesh Warke</h2>
                        <p>2020BTEEN00028</p>
                        
                    </div>
                </div>
            </section>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossOrigin="anonymous"></script>


        </div>
    )
}

export default Contact
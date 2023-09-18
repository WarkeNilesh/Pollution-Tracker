import React from "react"


import "bootstrap/dist/css/bootstrap.min.css"
import "./Homepage.css"
import { useNavigate } from 'react-router-dom';


const Homepage = () => {

    const navigate = useNavigate();
    return (

        <div className="Homepage">
            <div className="bg">
                <header>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/">POLLUTION MONITORING</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link " aria-current="page" href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " aria-current="page" href="/About">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="/Contact">Contact_us</a>
                                    </li>
                                </ul>

                                <button type="button" className="btn " id="btn-logic" onClick={() => navigate('/Login')} >Login</button>
                            </div>
                        </div>
                    </nav>
                </header>



                <div className="intro">
                    <div className="flexbox">

                        <span className="flexbox1">
                            <p className="tab11">
                                We design and deliver integrated, real-time air quality monitoring systems. Now you can measure
                                air quality, without the hassle, cost and risk associated with traditional air monitoring
                                projects.

                            </p>

                            <p className="tab11">
                                The primary goal of pollution monitoring systems is to help identify and mitigate the sources of pollution,
                                as well as to provide information to the public about the quality of the air they breathe.
                                {/* Overall, pollution monitoring systems are an important tool in the effort to reduce the harmful
                                effects of pollution on the environment. */}
                            </p>
                        </span>
                        <span className="flexbox2">
                            <img src={require('./images/intro_img2.jpg')} alt="not found" className="intro-img" />
                        </span>

                    </div>
                </div>


                <div class="advantage">
                    <h1>Advantage:</h1>
                    <br />
                    <div>
                        <div class="adv">
                            1] The data collected from air quality monitoring helps us assess impacts caused by poor air quality on
                            public health.
                        </div>

                        <div class="adv">
                            2] Air quality data helps us determine if an area is meeting the air quality standards devised by CPCB,
                            WHO
                            or OSHA.
                        </div>

                        <div class="adv">
                            3] The data collected from air quality monitoring would primarily help us identify polluted areas, the
                            level
                            of pollution and air quality level.
                        </div>



                    </div>
                </div>
                
            </div>
               <div class="application">
                    <h2 class="app-title">
                        Application
                    </h2>
                    <div class="container1">
                        <div class="row">
                            <div class="card">
                            <img src={require('./images/ind-hyg.jpeg')} alt=" " />
                                <h2>
                                    Industrial Hygiene
                                </h2>
                                <p class="card-text" >
                                    Maximize the health and productivity of your workforce with a real-time industrial hygiene air
                                    monitoring system</p>
                            </div>
                            <div class="card">
                                <img src={require('./images/gov-1.jpg')} alt=" " />
                                <h2>
                                    Government Authorities
                                </h2>
                                <p class="card-text" />
                                Build healthier cities with a trusted ambient air quality monitoring network.
                            </div>
                            <div class="card">
                                <img src={require('./images/ind.jpg')} alt=" " />
                                <h2>
                                    Indoor Air Quality
                                </h2>
                                <p class="card-text" />
                                Achieve a healthier, safer and more productive workplace by investing in an indoor air quality
                                testing system.
                            </div>
                            <div class="card">
                                <img src={require('./images/wild-fire-1.jpeg')} alt="not found"  />
                                <h2>
                                    Wildfire Smoke Protection
                                </h2>
                                <p class="card-text" />
                                Protect and reassure peoples with hyper-local data from a real-time wildfire smoke monitor.
                            </div>
                        </div>
                    </div>
                </div>


        </div>




    )
}

export default Homepage
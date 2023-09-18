import React from "react"
import "./About.css"

const About = ({ setLoginUser }) => {
    return (
        <div classNameName="About">
            <section className="about-us">
                <div className="about">
                    <img src={require('./images/about img.png')} alt="not found" className="pic" />
                    <div className="text">
                        <h2>About Us</h2>
                        
                        <p>Nowadays air is getting polluted because of the release of toxic gases by industries and vehicle emissions and increased concentration of harmful gases and particulate matter in the atmosphere. The level of pollution is increasing rapidly due to factors like industries, urbanization, increasing population, and vehicle use which can affect human health. Particulate matter is one of the most important parameters having a significant contribution to the increase in air pollution. Nowadays air is getting polluted because of the release of toxic gases by industries and vehicle emissions and increased concentration of harmful gases and particulate matter in the atmosphere. The level of pollution is increasing rapidly due to factors like industries, urbanization, increasing population, and vehicle use which can affect human health. Particulate matter is one of the most important parameters having a significant contribution to the increase in air pollution.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
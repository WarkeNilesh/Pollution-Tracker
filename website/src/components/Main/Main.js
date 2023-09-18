import React, { useState, useEffect } from 'react';

import 'firebase/database';

import "./Main.css"
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from "firebase/database";
import "bootstrap/dist/css/bootstrap.min.css"
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)



const firebaseConfig = {
    apiKey: "AIzaSyAECSVk1UiljIhVshws9gAROjmXBgRePKY",
    authDomain: "pollution-monitoring-6c325.firebaseapp.com",
    databaseURL: "https://pollution-monitoring-6c325-default-rtdb.firebaseio.com",
    projectId: "pollution-monitoring-6c325",
    storageBucket: "pollution-monitoring-6c325.appspot.com",
    messagingSenderId: "1004634672091",
    appId: "1:1004634672091:web:6228f85cb4eaa1472df5fe",
    measurementId: "G-8CZJF72WG8"
};

const app = initializeApp(firebaseConfig);


const Main = ({ setLoginUser }) => {

   
        useEffect(() => {
            const ifameData = document.getElementById("iframeId")
            const lat = 16.8457;
            const lon = 74.6015;
            ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
        })
    

    const options = {
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: "LAST 10 READINGS", // Set the x-axis label
                    color: "black", // Set the color of the x-axis label
                    font: {
                        size: 12, // Set the font size of the x-axis label
                    },
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: "READINGS", // Set the y-axis label
                    color: "black", // Set the color of the y-axis label
                    font: {
                        size: 12, // Set the font size of the y-axis label
                    },
                },
                suggestedMin: 0, // Set the minimum value for the y-axis

                ticks: {
                    // Customize the y-axis ticks

                    callback: function (value) {
                        return value; // Add a percentage symbol to the tick labels
                    },
                },
            },
        },

        legend: {
            display: false, // Hide the chart legend
        },
    };
    const navigate = useNavigate();
    const [co, CO] = useState(null);
    const [graphco, setCO] = useState([]);
    const [co2, CO2] = useState(null);
    const [graphco2, setCO2] = useState([]);
    const [temp, TEMP] = useState(null);
    const [graphtemp, setTEMP] = useState([]);
    const [humi, HUMI] = useState(null);
    const [graphhumi, setHUMI] = useState([]);

    const graphdata1 = {
        labels: ['-9', '-8', '-7', '-6', '-5', '-4', '-3', '-2', '-1', '0'],
        datasets: [{
            data: graphco
        }]

    };
    const graphdata2 = {
        labels: ['-9', '-8', '-7', '-6', '-5', '-4', '-3', '-2', '-1', '0'],
        datasets: [{
            data: graphco2
        }]
    };
    const graphdata3 = {
        labels: ['-9', '-8', '-7', '-6', '-5', '-4', '-3', '-2', '-1', '0'],
        datasets: [{
            data: graphtemp
        }]
    };
    const graphdata4 = {
        labels: ['-9', '-8', '-7', '-6', '-5', '-4', '-3', '-2', '-1', '0'],
        datasets: [{
            data: graphhumi
        }]
    };




    useEffect(() => {
        const db = getDatabase(app);
        const dataRef = ref(db, 'data');

        onValue(dataRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            console.log("The data object has changed:", data);
            const co_reading = data.CO;
            CO(co_reading);

            const co2_reading = data.CO2;
            CO2(co2_reading);

            const temp_reading = data.TEMP;
            TEMP(temp_reading);

            const humi_reading = data.HUMI;
            HUMI(humi_reading);

        });


        // const myClassElement = document.querySelectorAll('.cards');

    //     if (co > 275) {
    //         myClassElement[0].style.backgroundColor = 'red';
    //         myClassElement[0].style.color = 'white';

    //     }
    //     else {
    //         myClassElement[0].style.backgroundColor = 'white';
    //         myClassElement[0].style.color = 'black';
    //     }
    //    if (co2 > 450) {
    //         myClassElement[1].style.backgroundColor = 'red';
    //         myClassElement[1].style.color = 'white';

    //     }
    //     else {
    //         myClassElement[1].style.backgroundColor = 'white';
    //         myClassElement[1].style.color = 'black';
    //     }
    //     if (temp > 35) {
    //         myClassElement[2].style.backgroundColor = 'red';
    //         myClassElement[2].style.color = 'white';

    //     }
    //     else {
    //         myClassElement[2].style.backgroundColor = 'white';
    //         myClassElement[2].style.color = 'black';
    //     }
    //     if (humi > 40) {
    //         myClassElement[3].style.backgroundColor = 'red';
    //         myClassElement[3].style.color = 'white';

    //     }
    //     else {
    //         myClassElement[3].style.backgroundColor = 'white';
    //         myClassElement[3].style.color = 'black';
    //     }


    });

    useEffect(() => {
        setCO((prevData) => {
            // Take the past 10 values and append the new value
            const updatedData = [...prevData, co];
            return updatedData.slice(-10);
        });
    }, [co]);
    useEffect(() => {
        setCO2((prevData) => {
            // Take the past 10 values and append the new value
            const updatedData = [...prevData, co2];
            return updatedData.slice(-10);
        });
    }, [co2]);
    useEffect(() => {
        setTEMP((prevData) => {
            // Take the past 10 values and append the new value
            const updatedData = [...prevData, temp];
            return updatedData.slice(-10);
        });
    }, [temp]);
    useEffect(() => {
        setHUMI((prevData) => {
            // Take the past 10 values and append the new value
            const updatedData = [...prevData, humi];
            return updatedData.slice(-10);
        });
    }, [humi]);

    return (

        <>
            <div className='main'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">POLLUTION MONITORING</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-links " aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-links " aria-current="page" href="/About">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-links" aria-current="page" href="/Contact">Contact_us</a>
                                </li>
                            </ul>


                            <button type="button" className="btn " onClick={() => navigate('/Login')} >Login</button>
                        </div>
                    </div>
                </nav>
                <div className='map'>
                    <iframe id="iframeId" title='hi' height="500px" width="100%"></iframe>
                </div>
                <div className='featured-cards'>
                    <div className='par'>
                        <div className='cards'>
                            <CircularProgress className='circle' value={co} min={0} max={1000} size='20vw' color='green'>
                                <CircularProgressLabel className='card-text'>{co}</CircularProgressLabel>
                                <p className="title">CO: {co} PPM</p>
                            </CircularProgress>
                        </div>
                        <div className='graph'>
                            <div >
                                <Line data={graphdata1} options={options}></Line>
                            </div>
                        </div>
                    </div>
                    <div className='par'>
                        <div className='cards'>
                            <CircularProgress className='circle' value={co2} min={0} max={1000} size='20vw' color='green'>
                                <CircularProgressLabel className='card-text'>{co2}</CircularProgressLabel>
                                <p className="title">CO2: {co2} PPM</p>
                            </CircularProgress>
                        </div>
                        <div className='graph'>
                            <div >
                                <Line data={graphdata2} options={options}></Line>
                            </div>
                        </div>
                    </div>

                    <div className='par'>
                        <div className='cards'>
                            <CircularProgress className='circle' value={temp} min={0} max={100} size='20vw' color='green'>
                                <CircularProgressLabel className='card-text'>{temp}</CircularProgressLabel>
                                <p className="title">TEMPERATURE: {temp} </p>
                            </CircularProgress>
                        </div>
                        <div className='graph'>
                            <div >
                                <Line data={graphdata3} options={options}></Line>
                            </div>
                        </div>
                    </div>
                    <div className='par'>
                        <div className='cards'>
                            <CircularProgress className='circle' value={humi} min={0} max={100} size='20vw' color='green'>
                                <CircularProgressLabel className='card-text'>{humi}%</CircularProgressLabel>
                                <p className="title">HUMIDITY: {humi} %</p>
                            </CircularProgress>
                        </div>
                        <div className='graph'>
                            <div >
                                <Line data={graphdata4} options={options}></Line>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
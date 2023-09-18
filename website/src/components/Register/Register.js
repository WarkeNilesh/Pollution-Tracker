import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css"

import { auth } from "../firebase";

import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reenterpassword: ""
  })
  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  
  
  const Register = () => {
    const { name, email, password, reenterpassword } = user
    if (name && email && password && (password === reenterpassword)) 
    {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
          
          const user = res.user;
          await updateProfile(user, {
            displayName: user.name,
          });
          navigate("/main");
        })
     

  }
}

return (
  <div className="register">
    <div className="container">
      {console.log(user)}
      <h1>Signup</h1>
      <div className="box">
        <i className="fa-solid fa-envelope"></i>
        <input type="text" name="name" value={user.name} id="text" placeholder="Enter your Name" onChange={handleChange} />
      </div>
      <div className="box">
        <i className="fa-solid fa-envelope"></i>
        <input type="email" name="email" value={user.email} id="email" placeholder="Enter your Email" onChange={handleChange} />
      </div>
      <div className="box">
        <i className="fa-solid fa-lock"></i>
        <input type="password" name="password" value={user.password} id="password" placeholder="Enter your password" onChange={handleChange} />
      </div>
      <div className="box">
        <i className="fa-solid fa-lock"></i>
        <input type="password" name="reenterpassword" value={user.reenterpassword} id="reenterpassword" placeholder="Re-enter your password" onChange={handleChange} />
      </div>
      <button className="btn" onClick={Register} >Sign Up</button>
    </div>


    <script src="https://kit.fontawesome.com/ee5fe0392e.js" crossOrigin="anonymous"></script>
  </div>
)
}

export default Register;
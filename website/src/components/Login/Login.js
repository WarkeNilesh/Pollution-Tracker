import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";


import { auth } from "../firebase";

import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [user,setUser]= useState({
       
    email:"",
    password:""
   
})

const handleChange = e =>{
    const {name, value} = e.target
    setUser({
        ...user,
        [name]:value
    })
}
 
  
  const Login = () =>{

    
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then(async (res) => {
        
        
        navigate("/Main")
      })
      .catch((err) => {
       console.log(err);
        
      });
  };
  return (
    <div className="login">
    <div className="container">
    <h1>LOGIN</h1>
    {console.log(user)}
    <div className="box">
        <i className="fa-solid fa-envelope"></i>
        <input type="email" name="email" value = {user.email} onChange={ handleChange} id="email" placeholder="Enter your Email" />
    </div>
    <div className="box">
        <i className="fa-solid fa-lock"></i>
        <input type="password" name="password" value = {user.password} onChange={ handleChange} id="password" placeholder="Enter your password" />
    </div>
    <button className="btn" onClick={Login}>Sign In</button>
    <p>or</p>
    <button className="btn" onClick={()=> navigate('/Register')}>Sign UP</button>
    

    <script src="https://kit.fontawesome.com/ee5fe0392e.js" crossOrigin="anonymous"></script>
    </div>
</div>
  );
}

export default Login;
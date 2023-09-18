import Homepage from "./components/Homepage/Homepage";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [user,setLoginUser] = useState({})
  
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Homepage />} />
       {/* <Route  path="/Main" element={(user && user._id)?<Main setLoginUser={setLoginUser} />:<Login setLoginUser={setLoginUser} />} /> */}
          
          
        <Route path="/Login" element={<Login setLoginUser = {setLoginUser}/>} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Main" element={<Main />} />
      
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

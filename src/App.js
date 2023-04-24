import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HelloWorld from "./components/HelloWorld/HelloWorld";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Navbar from "./components/Navbar/Navbar";

import { auth } from "./firebase";


function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    
    <div className="App">
    
      <Router>
      <Navbar/>
        <Routes>
          
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/helloworld" element={<HelloWorld name={userName} />} />
          
        </Routes>
      </Router>
  
    </div>
    
  );
}

export default App;
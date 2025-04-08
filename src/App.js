import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login' 



const App = () => {
  return (
  <Router>
<Navbar />
 {/* Navbar remains persistent */}
<Routes>
  <Route path="/Home" element={<Home />} />
  <Route path="/Register" element={<Register />} />
  <Route path="/Navbar" element={<Navbar />} />
  <Route path="/Login" element={<Login />} /> 
</Routes>
</Router>









  )
}

export default App
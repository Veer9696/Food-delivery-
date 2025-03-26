import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Register/>
      <Login/>
      
    </div>
  )
}

export default App

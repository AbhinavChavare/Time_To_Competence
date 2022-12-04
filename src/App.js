import React from 'react'
import About from './Pages/About'
import Home from './Pages/Home'
import Content from './Pages/Content'
import Contact from './Pages/Contact'
import HeaderLogo from "./Components/HeaderNavbar/HeaderLogo"
import Auth from './Pages/Auth'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"

const App = () => {
  return (
    <div>
  <Router>
    <HeaderLogo/>     
      <Routes>
        <Route path="/" element={ <Home/>} />
      </Routes>
      <Routes>
        <Route path="/about" element={ <About/>} />
      </Routes>
      <Routes>
        <Route path="/content" element={ <Content/>} />
      </Routes>
      <Routes>
        <Route path="/contact" element={ <Contact/>} />
      </Routes>
      <Routes>
        <Route path="/login" element={ <Auth/>} />
      </Routes>
      
    
    </Router>
    </div>
  )
}

export default App

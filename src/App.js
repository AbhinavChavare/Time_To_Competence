import React from 'react'
import About from './Pages/About/About'
import Home from './Pages/Home'
import Content from './Pages/Content/Content'
import Contact from './Pages/Contact/Contact'
import HeaderLogo from "./Components/HeaderNavbar/HeaderLogo"
import Auth from './Pages/Auth'
import AuthLogout from './Components/Login-out/AuthLogout'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Footer from './Components/Footer/Footer'
import Protected from './Components/Login-out/Protected'

const App = () => {
  return (
  <div className='app-container'>
  <Router>
    <HeaderLogo/>     
      <Routes>
        <Route path="/" element={ <Home/>} />
      </Routes>
      <Routes>
        <Route path="/about" element={ <Protected data={<About/>}/>} />
      </Routes>
      <Routes>
        <Route path="/content" element={  <Protected data={<Content/>}/>} />
      </Routes>
      <Routes>
        <Route path="/contact" element={ <Contact/>} />
      </Routes>
      <Routes>
        <Route path="/login" element={ <Auth/>} />
      </Routes>
      <Routes>
        <Route path="/logout" element={ <AuthLogout/>} />
      </Routes>
        <Footer/>
    </Router>
</div>
  )
}

export default App

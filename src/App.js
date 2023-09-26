import React, { useEffect, useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Loader from './components/Loader'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Services from './pages/Services'
import Products from './pages/Products'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login'

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  return (
    <>
      {loading ?
        <Loader />
        :
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/products' element={<Products />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          {/* <Home /> */}
          <Footer />
        </>
      }





    </>
  )
}

export default App
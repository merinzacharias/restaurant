import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AllLandingPage from './pages/AllLandingPage'
import About from './pages/routingPages/About'
import Navbar from './components/Navbar'
import Product from './pages/routingPages/Product'
import Contact from './pages/routingPages/Contact'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<AllLandingPage/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/product' element={<Product/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllProducts from '../components/AllProducts'
import HomePage from '../components/HomePage'
import About from '../components/About'
import ContactUs from '../components/ContactUs'
import ProductDetails from '../components/ProductDetails'
import NavBar from '../components/NavBar'
import Cart from '../components/Cart'
import Login from '../components/Login'

const AppRoutes = ({list,cart,mycart,deletP,reset}) => {

  return (
  
    <div> 
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/allProducts' element={<AllProducts list={list} addP={cart}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/ProductDetails/:id' element={<ProductDetails list={list} addP={cart}/>}/>
        <Route path='/Cart' element={<Cart mycart={mycart} deletP={deletP} resetC={reset}/>}/>
        <Route path='/login' element={<Login/>}/>


      </Routes>


    </div>
  )
}

export default AppRoutes

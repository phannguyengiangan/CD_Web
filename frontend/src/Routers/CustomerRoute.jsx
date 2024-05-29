import React from 'react'
import { Navbar } from '../component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../component/Home/Home'
import ProductDetails from '../component/ProductPage/ProductDetails'
// import Cart from '../component/Cart/Cart'
import Profile from '../component/Profile/Profile'
import { Cart } from '../component/Cart/Cart'
import { Auth } from '../component/Auth/Auth'

export const CustomerRoute = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/account/:register' element={<Home/>}/>
            <Route path='/shop/:city/:title/:id' element={<ProductDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/my-profile/*' element={<Profile/>}/>
        </Routes>
        <Auth/>
    </div>
  )
}

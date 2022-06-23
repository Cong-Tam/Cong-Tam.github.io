import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import Introduction from '../pages/Introduction'

const ReactRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/gioi-thieu' element={<Introduction/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/danh-sach-san-pham' element={<Catalog/>}/>
            <Route path='/danh-sach-san-pham/:slug' element={<Catalog/>}/>
            <Route path='/san-pham/:slug' element={<Product/>}/>
        </Routes>
    )
}

export default ReactRoutes
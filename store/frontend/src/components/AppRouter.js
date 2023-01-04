import React from 'react'
import {BrowserRouter,Route} from "react-router-dom"
import FrontPage from '../pages/FrontPage.js'
import AboutPage from '../pages/AboutPage.js'
import ProductPage from '../pages/ProductPage.js'

function AppRouter() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={FrontPage}/>
            <Route path="/about/" exact component={AboutPage}/>
            <Route path="/products/:id/" component={ProductPage}/>
        </BrowserRouter>
    )
    
}

export default AppRouter
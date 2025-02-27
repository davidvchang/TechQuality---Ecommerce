import Footer from "./components/Footer"
import NavBar from "./components/NavBar";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home"
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Review from "./pages/Review";
import PaymentAccepted from "./pages/PaymentAccepted";
import Products from "./pages/Products";
import ProductView from "./pages/ProductView";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Favorites from "./pages/Favorites";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const isAuthenticated = localStorage.getItem('token');

  return (
    <main>

      <NavBar/>
      <div className="pt-16">

        <BrowserRouter>
          <Routes>
            
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/product/:id_product" element={<ProductView/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/favorites" element={isAuthenticated ? <Favorites/> : <Navigate to="/login"/>}/>
              <Route path="/checkout" element={isAuthenticated ? <Checkout/> : <Navigate to="/login"/>}/>
              <Route path="/order-review" element={isAuthenticated ? <Review/> : <Navigate to="/login"/>}/>
              <Route path="/payment-accepted" element={isAuthenticated ? <PaymentAccepted/> : <Navigate to="/login"/>}/>
          </Routes>
        </BrowserRouter>
      </div>

      <div className="w-full p-10">
        <Footer/>
      </div>
    </main>
  )
}

export default App

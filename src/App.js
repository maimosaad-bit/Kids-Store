import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Categories from './Categories';
import Cart from './Cart';
import Navbar from './Navbar';
import Products from './Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

import "./App.css"; 


const App = () => {

 const [cartItems, setCartItems] = useState([
    { name: "Product 1", price: 100 },
    { name: "Product 2", price: 50 },
  ]);


  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
<Route path="/" element={<Home/>} />
<Route path="/Categories" element={<Categories/>} />
<Route path="/cart" element={<Cart cartItems={cartItems} />} />
<Route path="/Products" element={<Products/>} />
    </Routes>

    <Footer />
    </BrowserRouter>
    
  )
}

export default App
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/pages/ProductList';
import Product from './components/pages/Product';
import ShoppingCart from './components/pages/ShoppingCart';
import Checkout from './components/pages/Checkout';
import './App.css'
import { CartProvider } from './services/CartContext';

const App = () => (
  <Router>
    <CartProvider>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  </Router>
);

export default App;

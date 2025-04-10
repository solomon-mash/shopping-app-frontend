import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import ProductDetails from "./components/productDetail";
import ProductList from './components/productlist';
import ShopDetail from './components/shopDetail';
import { CartProvider } from "./components/CartContext"; 
import Cart from './components/CartPage';
import Order from './components/order';

const App = () => {
  const userId = 1; 
  return (
    <CartProvider userId={userId}>

    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/shop/:shop_id" element={<ShopDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/order/:order_id" element={<Order />} />


      </Routes>
    </Router>
    </CartProvider>

  );
};

export default App;

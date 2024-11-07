import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import RestaurantList from './RestaurantList';
import RestaurantDetail from './RestaurantDetail';
import Cart from './Cart';
import Checkout from './Checkout';
import OrderHistory from './OrderHistory';
import UserProfile from './UserProfile';
import NavBar from './nav';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Add NavBar here so it renders on all pages */}
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurants" element={<RestaurantList />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

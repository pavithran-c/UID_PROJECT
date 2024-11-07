import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Order food from your favorite restaurants</h1>
          <p>Fast delivery, best prices, delicious food.</p>
          <div className="search-bar">
            <input type="text" placeholder="Search for restaurants, cuisines..." />
            <button>Search</button>
          </div>
        </div>
      </section>

      {/* Cuisine Categories */}
      <section className="cuisine-section">
        <h2>Explore by Cuisine</h2>
        <div className="cuisine-grid">
          <div className="cuisine-item">Pizza</div>
          <div className="cuisine-item">Burgers</div>
          <div className="cuisine-item">Chinese</div>
          <div className="cuisine-item">Desserts</div>
          {/* Add more cuisine items */}
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="featured-restaurants">
        <h2>Popular Restaurants</h2>
        <div className="restaurant-grid">
          <div className="restaurant-item">
            <img src="restaurant1.jpg" alt="Restaurant 1" />
            <h3>Restaurant 1</h3>
            <p>Chinese, Fast Food</p>
          </div>
          <div className="restaurant-item">
            <img src="restaurant2.jpg" alt="Restaurant 2" />
            <h3>Restaurant 2</h3>
            <p>Italian, Pizza</p>
          </div>
          <div className="restaurant-item">
            <img src="restaurant3.jpg" alt="Restaurant 3" />
            <h3>Restaurant 3</h3>
            <p>Indian, North Indian</p>
          </div>
          {/* Add more restaurant items */}
        </div>
      </section>

      {/* Special Offers */}
      <section className="offers-section">
        <h2>Special Offers</h2>
        <div className="offers-grid">
          <div className="offer-item">
            <h3>50% off on First Order</h3>
            <p>Use code: FIRST50</p>
          </div>
          <div className="offer-item">
            <h3>Free Delivery on Orders Above 2000</h3>
            <p>Valid for select restaurants</p>
          </div>
          {/* Add more offers */}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Food Delivery App. All rights reserved.</p>
        <p>
          <a href="#about">About Us</a> | <a href="#">Contact</a> | <a href="#">Download App</a>
        </p>
      </footer>
    </div>
  );
}

export default HomePage;

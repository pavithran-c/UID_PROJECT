import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RestaurantList.css';

const restaurantData = [
  { id: 1, name: 'Restaurant Name 1', cuisine: 'Chinese, Fast Food', rating: 4.5, deliveryTime: '30 mins', priceForTwo: '₹200' },
  { id: 2, name: 'Restaurant Name 2', cuisine: 'Indian, North Indian', rating: 4.2, deliveryTime: '40 mins', priceForTwo: '₹300' },
  { id: 3, name: 'Restaurant Name 3', cuisine: 'Italian, Pizza', rating: 4.8, deliveryTime: '25 mins', priceForTwo: '₹400' },
  // Add more restaurant data
];

function RestaurantList() {
  const navigate = useNavigate();

  const handleRestaurantClick = (id) => {
    navigate(`/restaurant/${id}`);
  };

  return (
    <div className="restaurant-list-page">
      {/* Restaurant List Section */}
      <section className="restaurant-list">
        <h2>Available Restaurants</h2>
        <div className="restaurant-grid">
          {restaurantData.map((restaurant) => (
            <div
              key={restaurant.id}
              className="restaurant-card"
              onClick={() => handleRestaurantClick(restaurant.id)}
            >
              <img src={`restaurant${restaurant.id}.jpg`} alt={restaurant.name} />
              <div className="restaurant-info">
                <h3>{restaurant.name}</h3>
                <p>{restaurant.cuisine}</p>
                <div className="restaurant-meta">
                  <span>⭐ {restaurant.rating} (100+ ratings)</span>
                  <span>{restaurant.deliveryTime}</span>
                  <span>{restaurant.priceForTwo} for two</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default RestaurantList;

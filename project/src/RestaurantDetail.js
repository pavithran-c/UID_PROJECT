import React from 'react';
import { useParams } from 'react-router-dom';
import './RestaurantDetail.css';

const restaurantData = [
  { id: 1, name: 'Restaurant Name 1', cuisine: 'Chinese, Fast Food', rating: 4.5, deliveryTime: '30 mins', priceForTwo: '₹200' },
  { id: 2, name: 'Restaurant Name 2', cuisine: 'Indian, North Indian', rating: 4.2, deliveryTime: '40 mins', priceForTwo: '₹300' },
  { id: 3, name: 'Restaurant Name 3', cuisine: 'Italian, Pizza', rating: 4.8, deliveryTime: '25 mins', priceForTwo: '₹400' },
  // Add more restaurant data
];

function RestaurantDetail() {
  const { id } = useParams(); // Get the restaurant ID from the URL
  const restaurant = restaurantData.find((rest) => rest.id === parseInt(id));

  if (!restaurant) {
    return <h2>Restaurant not found</h2>;
  }

  return (
    <div className="restaurant-page">
      {/* Restaurant Info Section */}
      <section className="restaurant-info">
        <img src={`restaurant${restaurant.id}.jpg`} alt={restaurant.name} className="restaurant-banner" />
        <div className="restaurant-details">
          <h1>{restaurant.name}</h1>
          <p>{restaurant.cuisine}</p>
          <div className="restaurant-meta">
            <div className="rating">
              <span>{restaurant.rating}</span> ⭐️ (100+ ratings)
            </div>
            <div className="delivery-time">
              <span>{restaurant.deliveryTime}</span> 🚴 Delivery
            </div>
            <div className="price">
              <span>{restaurant.priceForTwo} for two</span>
            </div>
          </div>
        </div>
      </section>

      {/* Add menu or other details for the restaurant here */}
    </div>
  );
}

export default RestaurantDetail;

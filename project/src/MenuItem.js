import React, { useState } from 'react';

function MenuItem({ item }) {
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    // Add item to cart (handle cart logic)
    console.log(`Added ${quantity} of ${item.name} to cart`);
  };

  return (
    <li>
      <span>{item.name} - ${item.price}</span>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        min="1"
      />
      <button onClick={addToCart}>Add to Cart</button>
    </li>
  );
}

export default MenuItem;

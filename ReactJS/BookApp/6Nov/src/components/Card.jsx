import React, { useState } from 'react';
import './Card.css';

function Card({ img, title, price, cartCount, setCartCount }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert("Maximum quantity per item is 10");
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Minimum quantity is 0");
    }
  };

  const addToCart = () => {
    if (cartCount + count <= 20) {
      setCartCount(cartCount + count);
      alert(`${count} ${title} added to cart`);
    } else {
      alert("Cart limit exceeded! Maximum 20 items allowed.");
    }
  };

  return (
    <div id='udi'>
      <img src={img} alt={title} height={100} width={100} />
      <h1>Title: {title}</h1>
      <h3>Price: {price}</h3>
      <div id='flex'>
        <button onClick={increment}>+</button>
        <p id="result">{count}</p>
        <button onClick={decrement}>-</button>
      </div>
      <div id="cart">
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;
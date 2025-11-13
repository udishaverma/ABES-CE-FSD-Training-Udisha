import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav({ cartCount }) {
  return (
    <div id='nav'>
      <Link to="/"><button>Home</button></Link>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/register"><button>Register</button></Link>
      <div className="cart-container">
        <button>Cart</button>
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </div>
    </div>
  );
}

export default Nav;
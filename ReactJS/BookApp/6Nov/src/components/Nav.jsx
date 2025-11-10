import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div id='nav'>
      <Link to="/"><button>Home</button></Link>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/register"><button>Register</button></Link>
      <button>Cart</button>
    </div>
  );
}

export default Nav;
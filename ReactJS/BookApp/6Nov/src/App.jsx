import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Book from './components/Book';
import Card from './components/Card';
import Login from './components/login';
import Registration from './components/registration';
import './App.css';

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div>
      <Nav cartCount={cartCount} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Book />
              <div id="cards">
                <Card
                  img="https://cdn-icons-png.freepik.com/512/9044/9044429.png"
                  title="Maths"
                  price="Rs.400"
                  cartCount={cartCount}
                  setCartCount={setCartCount}
                />
                <Card
                  img="https://cdn-icons-png.flaticon.com/512/3277/3277375.png"
                  title="Physics"
                  price="Rs.600"
                  cartCount={cartCount}
                  setCartCount={setCartCount}
                />
                <Card
                  img="https://cdn-icons-png.flaticon.com/512/5403/5403827.png"
                  title="Chemistry"
                  price="Rs.900"
                  cartCount={cartCount}
                  setCartCount={setCartCount}
                />
                <Card
                  img="https://cdn-icons-png.flaticon.com/512/3038/3038297.png"
                  title="English"
                  price="Rs.800"
                  cartCount={cartCount}
                  setCartCount={setCartCount}
                />
              </div>
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </div>
  );
};

export default App;
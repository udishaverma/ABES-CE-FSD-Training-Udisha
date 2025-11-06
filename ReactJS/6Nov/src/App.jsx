// import React from 'react'
// import './App.css'
// import 'bootstrap/dist/css/bootstrap.css';
// // import Link1 from './components/Link1';

// function App() {
//   return (
//     <div>
//       <Link1/>
//     </div>
//   )
// }

// export default App

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Registration from './components/registration';
import Book from './components/Book';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Book />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  );
};

export default App;
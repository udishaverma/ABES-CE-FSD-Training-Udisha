import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Part1 from './components/asgnp1';
import Part2 from './components/asgnp2';
import Part3 from './components/asgnp3';
import Part4 from './components/asgnp4';
function App() {
  return (
    <div>
      <Part1></Part1>
      <Part2></Part2>
      <div id='flexbox'>
        <Part3 name='Pizza' img='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/26/d112a6d7-d173-4ca7-a5ee-40f845719d18_841144.JPG' rate='Rs.229'></Part3>
        <Part3 name='Burger' img='https://www.vegrecipesofindia.com/wp-content/uploads/2020/12/burger-recipe-1.jpg' rate='Rs.149'></Part3>
        <Part3 name='Coke' img='https://kentstreetcellars.com.au/cdn/shop/files/coke-can_7bf866c9-bffc-449d-a173-de324ac47905_1200x1200.png?v=1687840069' rate='Rs.49'></Part3>
      </div>
      <Part4></Part4>
    </div>
  )
}

export default App

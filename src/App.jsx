// const numbers = [0, 2, 4, 6, 7, 8, 10]
// [].map creates a NEW array based on an OLD one
/*
    Anonymous functions
      function() {}
      () => {}
*/

/*
    At the top of the page, have a shopping cart icon with a number-badge
    Every movie should have an "add-to-cart" button
    when clicked, it increases the number in the badge
*/
// const doubles = numbers.map((n) => {
//   return n * 2
// })

// console.log(doubles)
/*
    JSX differences
      Fragment = <></>

      Self closing elements must have a final /
      use className instead of class

    
    Make a component called Greeting
      <p>Hello, guest</p>

      useState
*/

import { Route, Routes, Link } from "react-router-dom"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import SingleMovie from "./Pages/SingleMovie"
import { CartContextProvider, useCartContext } from "./useContext/context"
import Header from "./Header"


import { useState } from 'react';


function App() {
  const { cart } = useCartContext()
  return (
    <CartContextProvider>
       <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/movie/:id" element={<SingleMovie />} />
        </Routes>
    </CartContextProvider>
  )
}

export default App

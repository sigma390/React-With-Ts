import { useState } from 'react';

import Cart from './Cart.tsx';
import { useCartSelector } from '../store/hooks.ts';

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  //step 20 use the dta

  const carQty = useCartSelector((state)=> state.cart.items.reduce((val,item)=> val+item.qty,0))//reduce sums up data , accepts a fxn , initial value

  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }

  return (
    <>
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Redux</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart {carQty}</button>
        </p>
      </header>
    </>
  );
}

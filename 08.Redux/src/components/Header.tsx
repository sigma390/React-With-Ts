import { useState } from 'react';

import Cart from './Cart.tsx';
import { useCartSelector } from '../store/hooks.ts';

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  //step 20 use the dta

  const carquantity = useCartSelector((state)=> state.cart.items.reduce((val,item)=> val + item.quantity,0))//reduce sums up data , accepts a fxn , initial value

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
          <h1>Elegant Fashion Store</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart {carquantity}</button>
        </p>
      </header>
    </>
  );
}

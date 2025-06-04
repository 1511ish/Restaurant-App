

import React, { useState, useEffect } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

import { useSelector } from 'react-redux';


// function App() {
//   const [cartIsShown, setCartIsShown] = useState(false);

//   const showCartHandler = () => {
//     setCartIsShown(true);
//   }
//   const hideCartHandler = () => {
//     setCartIsShown(false);
//   }
//   return (
//     <CartProvider>
//       {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
//       <Header onShowCart={showCartHandler} />
//       <main>
//         <Meals />
//       </main>
//     </CartProvider>
//   );
// }


function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <>
      {showCart && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
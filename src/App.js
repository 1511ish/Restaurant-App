

import React, { useState, useEffect } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';


function App() {

  return (
    <React.Fragment>
      <Cart/>
      <Header />
      <main>
        <Meals/>
      </main>
      <footer>
        <a href="https://www.flaticon.com/free-icons/retail" title="retail icons">Retail icons created by Frey Wazza - Flaticon</a>
      </footer>
    </React.Fragment>
  );
}

export default App;
import React from 'react';
import Product from './components/Product';
import data from './data';

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">green.wave</a>
        </div>
        <div>
          <a href="/Cart">Cart</a>
          <a href="/Sign In">Sigh In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map(product => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </main>
      <footer className="row center"> All rights reserved </footer>
    </div>
  );
}

export default App;

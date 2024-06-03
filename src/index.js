import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './services/CartContext';

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById('root')
);

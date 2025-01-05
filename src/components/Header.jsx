import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './headerFooter.css';
import { CartContext } from '../services/CartContext';

const Header = () => {
  const { cartItems } = useContext(CartContext); 
  const [cartItemCount, setCartItemCount] = useState(cartItems.length);

  
  useEffect(() => {
    setCartItemCount(cartItems.length); 
  }, [cartItems]);

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <div className='left-nav'>
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">Products</Link>
            </li>
          </div>
          <li className="nav-item">
            <Link to="/cart" className="cart-link">
              <ShoppingCartIcon className="cart-icon" />
              {cartItemCount > 0 && (
                <span className="badge">{cartItemCount}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

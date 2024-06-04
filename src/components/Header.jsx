import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItemCount(cartItemsFromLocalStorage.length);
  }, []);


  
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li>
            <Link to="/cart" className="cart-link">
              <ShoppingCartIcon />
              <span className="badge">{cartItemCount}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ShoppingCart.css';
import ShoppingCartIcon from '../utils/ShoppingCartIcon';
import DeleteIcon from '@mui/icons-material/Delete';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Mise à jour du localStorage
  };

  const checkout = () => {
    navigate('/checkout');
  };

  return (
    <div className="shopping-cart">
      <ShoppingCartIcon width={60} height={50} color="black" />
      {cartItems.length === 0 ? (
        <div className='length0'>
          <h4>Votre panier est vide!</h4>
          <p>Parcourez nos catégories et découvrez nos meilleures offres!</p>
          <Link to='/products' className='btn-commencez'>COMMENCEZ VOS ACHATS</Link>
        </div>
      ) : (
        <>
          <div className="liste-shopping-card">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item-shopping">
                <img src={item.image} alt={item.name} className="product-image-shopping" />
                <div className="product-details-shopping">
                  <h3>{item.name}</h3>
                  <p>{item.price}€</p>
                  <DeleteIcon
                    className="delete-icon"
                    onClick={() => removeItem(item.id)}
                    style={{ cursor: 'pointer', color: 'red' }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="checkout-button-container">
            <button onClick={checkout}>Passer à la caisse</button>
            <span className="item-count">{cartItems.length}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;

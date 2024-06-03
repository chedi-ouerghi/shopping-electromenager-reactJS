// src/components/Product.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/ProductService';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckIcon from '@mui/icons-material/Check';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    getProductById(id).then(data => setProduct(data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const handleAddToCart = () => {
    setAddedToCart(true);

    // Get existing cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    // If the product is not in the cart, add it
    if (existingItemIndex === -1) {
      const updatedCartItems = [...cartItems, { id: product.id, image: product.imageUrl, name: product.name, price: product.price }];
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    }

    // Reset addedToCart state after 2 seconds
    setTimeout(() => setAddedToCart(false), 2000); 
  };

  return (
   <div className="product-details">
  <div className="image-container">
    <img src={product.imageUrl} alt={product.name} className="product-image" />
  </div>
  <div className="product-info">
    <h1>{product.name}</h1>
    <p>{product.description}</p>
        <p>Prix: {product.price}€</p>
        <div className='flex_boutton'>
    <a href={product.productUrl} target="_blank" rel="noopener noreferrer" className="product-link">
      <OpenInNewIcon /> Voir le produit
    </a>
    <button className={addedToCart ? 'add-to-cart added' : 'add-to-cart'} onClick={handleAddToCart}>
      {addedToCart ? <CheckIcon /> : <ShoppingCartIcon />} {addedToCart ? 'Ajouté au Panier' : 'Ajouter au Panier'}
    </button>
        </div>
        </div>
</div>

  );
};

export default Product;

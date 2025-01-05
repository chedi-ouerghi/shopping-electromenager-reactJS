import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/ProductService';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckIcon from '@mui/icons-material/Check';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './Product.css';
import { CartContext } from '../../services/CartContext';

const Product = () => {
  const { id } = useParams();
  const { addItemToCart } = useContext(CartContext); 
  const [product, setProduct] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    getProductById(id).then(data => setProduct(data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const handleAddToCart = () => {
    setAddedToCart(true);
    addItemToCart({
      id: product.id,
      image: product.imageUrl,
      name: product.name,
      price: product.price
    });

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
        <div className="flex_boutton">
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

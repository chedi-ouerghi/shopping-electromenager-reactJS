import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={product.imageUrl} alt={product.name} className="product-image-card" />
      </div>
      <div className="category">Électroménager</div>
      <div className="heading">
        <div className="name">{product.name}</div>
        <div className="author">
          Prix: <span className="price">{product.price}€</span>
        </div>
      </div>
      <Link to={`/product/${product.id}`} className="details-link">Voir Détails</Link>
    </div>
  );
};

export default ProductCard;

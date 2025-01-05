import React, { useState, useEffect } from 'react';
import { getProducts } from '../../services/ProductService'; // Removed getTopSellingProducts import
import './home.css';
import Temoignages from '../pages/Temoignages';
import Newsletter from '../pages/Newsletter';

function Home() {
  const [products, setProducts] = useState([]);
  const [advertisementProduct, setAdvertisementProduct] = useState(null);

  // Récupération des produits
  useEffect(() => {
    getProducts().then(data => {
      setProducts(data);
      const adProduct = data.find(product => product.id === 1);
      setAdvertisementProduct(adProduct);
    });
  }, []);

  // Fonction pour obtenir des produits aléatoires
  const getRandomProducts = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  // Filtrer les meilleurs produits (prix > 700)
  const bestSellingProducts = products.filter(product => product.price > 700);

  // Affichage des 5 premiers produits
  const firstFiveProducts = products.slice(0, 5);

  // Obtenir 7 produits aléatoires
  const randomProducts = getRandomProducts(products, 7);

  return (
    <div className="page_home">
      <div className="home_header">
        {advertisementProduct && (
          <div className="advertisement-container">
            <div className="advertisement-background-text">
              Publicité Spéciale: Profitez de l'offre exclusive !
            </div>
            <div className="advertisement-banner">
              <img src={advertisementProduct.imageUrl} alt={advertisementProduct.name} />
              <span className="advertisement-text-price">{advertisementProduct.price} TND</span>
              <div className="advertisement-text">
                <h2>{advertisementProduct.name}</h2>
                <p>{advertisementProduct.description}</p>
                <a href={advertisementProduct.productUrl} className="btn-buy">
                  Acheter maintenant
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <h1 className="title_Home_barre">Meilleures Ventes</h1>
      <div className="carousel-container">
        {bestSellingProducts.map(product => (
          <div className="carousel-item" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>{product.price} TND</span>
          </div>
        ))}
      </div>

      <h1 className="title_Home_barre">Nos Produits</h1>
      <div className="carousel-container">
        {firstFiveProducts.map(product => (
          <div className="carousel-item" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>{product.price} TND</span>
          </div>
        ))}
      </div>

      <h1 className="title_Home_barre">Top Promotions</h1>
      <div className="carousel-container">
        {randomProducts.map(product => (
          <div className="carousel-item" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>{product.price} TND</span>
          </div>
        ))}
      </div>

      <h1 className="title_Home_barre">Témoignages clients</h1>
      <Temoignages />

      <h1 className="title_Home_barre">Subscribe</h1>
      <Newsletter />
    </div>
  );
}

export default Home;

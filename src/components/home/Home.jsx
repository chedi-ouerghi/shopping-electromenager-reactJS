import React, { useState, useEffect } from 'react';
import { getProducts, getTopSellingProducts } from '../../services/ProductService';
import './home.css';
import Temoignages from '../pages/Temoignages';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { Alert, Snackbar } from '@mui/material';
import Newsletter from '../pages/Newsletter';
import BannerSection from '../pages/BannerSection';

function Home() {
  const [topSellingProducts, setTopSellingProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [showAd, setShowAd] = useState(true);
  
  useEffect(() => {
    const fetchTopSellingProducts = async () => {
      try {
        const products = await getTopSellingProducts();
        setTopSellingProducts(products);
      } catch (error) {
        console.error('Erreur lors de la récupération des produits les plus vendus :', error);
      }
    };

    fetchTopSellingProducts();
  }, []);

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data);
    });
  }, []);

  const productDetails = {
    id: 12,
    type: 'Réfrigérateur',
    name: 'Réfrigérateur Haier HTF-520IP7',
    description: 'Réfrigérateur écoénergétique avec technologie Haier',
    price: 900,
    imageUrl: 'https://cdn.lesnumeriques.com/optim/product/62/62935/f438a746-htf-520ip7__450_400.webp',
    productUrl: 'https://www.example.com/products/refrigerator-bosch'
  };

  // Function to handle closing the ad
  const handleClose = () => {
    setShowAd(false);
  };

  return (
    <>

{/* Cercle en haut */}
      <div className="circle top"></div>
   {/* Cercle au centre */}
      <div className="circle center"></div>

      {/* Cercle en bas */}
      <div className="circle bottom"></div>

       <div className='page'>

      
      {/* Snackbar pour la publicité */}
      <Snackbar open={showAd} autoHideDuration={10000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
        <Alert onClose={handleClose} severity="info">
          <div>
            <img src={productDetails.imageUrl} alt={productDetails.name} style={{ maxWidth: '100px', marginRight: '10px' }} />
            <div>
              <h2 style={{ fontSize: '1.5em', marginBottom: '5px', textAlign: 'left' }}>{productDetails.name}</h2>
              <p style={{ fontSize: '1em', marginBottom: '10px', textAlign: 'left' }}>{productDetails.description}</p>
              <p style={{ fontSize: '1em', marginBottom: '5px', textAlign: 'left' }}>Prix: {productDetails.price}€</p>
              <Link to={`/product/${productDetails.id}`} >Voir Détails</Link>
            </div>
          </div>
        </Alert>
      </Snackbar>

      {/* Section de la bannière promotionnelle */}
      <section className="banner-section-home">
        <BannerSection />
      </section>

      {/* Liste des produits */}
      <h1 className='title_Home_barre'>Top Vente</h1>
      <div className="gallery-container">
        <div className="gallery-content">
          {topSellingProducts.map(product => (
            <div key={product.id} className="image-card"> 
              <img src={product.imageUrl} alt={product.name} />
              <div className="image-overlay"> 
                <p>{product.name}</p> 
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='linkandtitle'>
        <h1 className='title_Home'>Liste des Produits</h1>
        <Link to="/products" className="show-more-button-home" >
          <AddIcon className="show-more-icon" />Voir plus
        </Link>
      </div>
      <div className="cards_home">
        {products.slice(0, 10).map(product => (
          <div className='Width_cards'>
            <div className="card-image">
              <img src={product.imageUrl} alt={product.name} className="product-image-card" />
            </div>
            <div className="category"> Électroménager </div>
            <div className="heading">
              {product.name}
              <div className="author">
                Prix: <span className="price">{product.price}€</span>
              </div>
              <Link to={`/product/${product.id}`} className="details-link">Voir Détails</Link>
            </div>
          </div>
        ))}
      </div>
      <h1 className='title_Home_barre'>Témoignages clients</h1>
      <Temoignages />
      <h1 className='title_Home_barre'>Subscribe</h1>
      <Newsletter/>
      
   
    </div>
    </>
   
  );
}

export default Home;

import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import FilterBar from './FilterBar';
import { getProducts } from '../../services/ProductService';
import './listcard.css';
import AddIcon from '@mui/icons-material/Add';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTypes, setFilterTypes] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data);
      setFilteredProducts(data);
    });
  }, []);

  useEffect(() => {
    let updatedProducts = [...products];

    if (searchTerm) {
      updatedProducts = updatedProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterTypes.length > 0) {
      updatedProducts = updatedProducts.filter(product =>
        filterTypes.includes(product.type)
      );
    }

    if (sortOption === 'name-asc') {
      updatedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'name-desc') {
      updatedProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === 'price-asc') {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  }, [sortOption, searchTerm, filterTypes, products]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const productHeight = 200; // Approximate height of a product card (adjust as necessary)
      const threshold = productHeight * 5; // Show button after scrolling past 5 products
      setShowScrollTopButton(scrollTop > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleFilterByTypes = (types) => {
    setFilterTypes(types);
  };

  const handleShowMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 10, filteredProducts.length));
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="product-list">
      <div className="filter-and-products">
        <FilterBar
          className="filtre-barre"
          products={products}
          onSort={handleSortChange}
          onSearch={handleSearchChange}
          onFilterByTypes={handleFilterByTypes}
        />
        <div className="list-cards">
          <div className="cards">
            {filteredProducts.slice(0, visibleCount).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {visibleCount < filteredProducts.length && (
            <button className="show-more-span" onClick={handleShowMore}>
              Voir <AddIcon className="show-more-icon" /> 
            </button>
          )}
        </div>
      </div>
      {showScrollTopButton && (
        <button className="scroll-to-top-button" onClick={handleScrollToTop}>
          <ArrowUpwardIcon />
        </button>
      )}
    </div>
  );
};

export default ProductList;

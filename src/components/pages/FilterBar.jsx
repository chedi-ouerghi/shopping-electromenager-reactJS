import React, { useState, useEffect } from 'react';
import './FilterBar.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const FilterBar = ({ products, onSort, onSearch, onFilterByTypes }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [showAllTypes, setShowAllTypes] = useState(false);
  const uniqueTypes = [...new Set(products.map(product => product.type))];

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm, onSearch]);

  useEffect(() => {
    onFilterByTypes(selectedTypes);
  }, [selectedTypes, onFilterByTypes]);

  const handleSortChange = (event) => {
    onSort(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTypeChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedTypes([...selectedTypes, value]);
    } else {
      setSelectedTypes(selectedTypes.filter(type => type !== value));
    }
  };

  const handleShowMore = () => {
    setShowAllTypes(!showAllTypes);
  };

  return (
    <div className="filter-bar">
      <label htmlFor="search">Rechercher :</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <label htmlFor="sort">Trier par :</label>
      <select id="sort" onChange={handleSortChange}>
        <option value="">Sélectionner</option>
        <option value="name-asc">Nom (A-Z)</option>
        <option value="name-desc">Nom (Z-A)</option>
        <option value="price-asc">Prix (croissant)</option>
        <option value="price-desc">Prix (décroissant)</option>
      </select>

      <div className="type-filters">
        <h3>Filtrer par type :</h3>
        {uniqueTypes.slice(0, showAllTypes ? uniqueTypes.length : 5).map((type, index) => (
          <div key={index}>
            <input
              type="checkbox"
              value={type}
              onChange={handleTypeChange}
              id={`checkbox-${type}`}
            />
            <label htmlFor={`checkbox-${type}`}>{type}</label>
          </div>
        ))}
        {uniqueTypes.length > 5 && (
          <button className="show-more-button-type" onClick={handleShowMore}>
            {showAllTypes ? <ExpandLessIcon /> : <ExpandMoreIcon />} {showAllTypes ? 'Voir moins' : 'Voir plus'}
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterBar;

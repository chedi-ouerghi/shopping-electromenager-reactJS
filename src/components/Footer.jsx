import React from 'react';

const footerStyle = {
    background: 'linear-gradient(250deg, #000000, #818181)',
  padding: '20px',
  textAlign: 'center',
  color: '#ffffff', // Couleur du texte pour contraster avec le fond
  fontSize: '1rem',
  borderTop: '1px solid #e0e0e0'
};

const pStyle = {
  margin: '0'
};

const Footer = () => (
  <div style={footerStyle}>
    <p style={pStyle}>&copy; 2024 Electroménager Store. Tous droits réservés.</p>
  </div>
);

export default Footer;

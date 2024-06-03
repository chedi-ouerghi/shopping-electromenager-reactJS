import React from 'react';

const ShoppingCartIcon = ({ width = 24, height = 24, color = "black" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 4H17L20 9L21 15H6.6L5.4 6H1"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="9" cy="20" r="1" stroke={color} strokeWidth="2" />
    <circle cx="18" cy="20" r="1" stroke={color} strokeWidth="2" />
  </svg>
);

export default ShoppingCartIcon;

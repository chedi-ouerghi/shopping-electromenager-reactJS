import React from 'react';
import './BannerSection.css';

const BannerSection = () => {
  return (
    <section className="banner-section">
      <img src="./pub2.jpg" alt="Promotion" className="image-small" />
      <img src="./banner-electromenager.jpg" alt="Bannière électroménager" className="image-large" />
      <img src="./pub-left.jpg" alt="Publicité de gauche" className="image-small" />
    </section>
  );
};

export default BannerSection;

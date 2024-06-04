import React from "react";
import './Newsletter.css';

const Newsletter = () => {
    return (
        <div className="newsletter-section-flex">
            <div className="left-div-newsletter" style={{display:'flex',flexDirection:'column',justifyContent:'space-around',gap:'3%',width:'35%',height:'48vh'}}>
            
              <div className="contact-info">
                    <p>Email: chedi@chedi.tn</p>
                    <p>Phone: +216 1234 5678</p>
                </div>

                <div className="notification">
                <div className="notiglow"></div>
                <div className="notititle">Newsletter</div>

                <div className="input-group">
                    <input type="email" className="input" id="Email" name="Email" placeholder="chedi@chedi.tn" autoComplete="off" />
                    <input className="button--submit" value="Subscribe" type="submit" />
                </div>
            </div>

            </div>
            <div className="footer-content">
              
<div className="map-div">
                <div className="map">
                    {/* Vous pouvez utiliser une bibliothèque de cartes comme react-google-maps ou react-leaflet ici */}
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.593498468489!2d-122.47172768468113!3d37.757679379760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2f2da87a7b%3A0xd9f2dbe3f1b5271d!2sGolden%20Gate%20Park!5e0!3m2!1sen!2sus!4v1632908584161!5m2!1sen!2sus" 
                        width="600" 
                        height="450" 
                        style={{border:0}} 
                        allowFullScreen="" 
                        loading="lazy"
                        title="Google Map"
                    ></iframe>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;

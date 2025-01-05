import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Box, Button, TextField, Typography } from '@mui/material';
import './checkout.css';
import ShoppingCart from './ShoppingCart';
import { CartContext } from '../../services/CartContext';

function Checkout() {
  const [paymentDetails, setPaymentDetails] = useState({
    name: '',
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  });
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  
  const { setCartItems } = useContext(CartContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const processPayment = (e) => {
    e.preventDefault();
    console.log('Détails du paiement:', paymentDetails);
    alert('Paiement effectué avec succès!');
    
    
    setCartItems([]);  

    localStorage.removeItem('cart');  
    setOpen(false);  
    navigate('/');   
  };

  return (
    <div className="checkout-wrapper">
      {/* Fond avec le composant ShoppingCart */}
      <div className="background-cart-content">
        <ShoppingCart />  {/* Affiche le composant ShoppingCart en arrière-plan */}
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="payment-modal-title"
        aria-describedby="payment-modal-description"
      >
        <Box className="modal-container">
          <Typography id="payment-modal-title" variant="h6" component="h2" className="modal-title">
            Informations de paiement
          </Typography>
          <form onSubmit={processPayment} className="payment-form">
            <TextField
              label="Nom"
              variant="outlined"
              margin="normal"
              fullWidth
              id="name"
              name="name"
              value={paymentDetails.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Numéro de carte"
              variant="outlined"
              margin="normal"
              fullWidth
              id="card-number"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={handleChange}
              required
            />
            <div className="expiration-cvv">
              <TextField
                label="Date d'expiration"
                variant="outlined"
                margin="normal"
                fullWidth
                id="expiration-date"
                name="expirationDate"
                value={paymentDetails.expirationDate}
                onChange={handleChange}
                required
              />
              <TextField
                label="CVV"
                variant="outlined"
                margin="normal"
                fullWidth
                id="cvv"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" variant="contained" className="pay-button" fullWidth>
              Payer
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default Checkout;

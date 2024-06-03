import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Box, Button, TextField, Typography } from '@mui/material';
import './checkout.css';

function Checkout() {
  const [paymentDetails, setPaymentDetails] = useState({
    name: '',
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  });
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const processPayment = (e) => {
    e.preventDefault();
    console.log('Détails du paiement:', paymentDetails);
    alert('Paiement effectué avec succès!');
    localStorage.removeItem('cart');
    setOpen(false);
    navigate('/');
  };

  return (
    <div className="checkout-background">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="payment-modal-title"
        aria-describedby="payment-modal-description"
      >
        <Box className="modal-box">
          <Typography id="payment-modal-title" variant="h6" component="h2">
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
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Payer
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default Checkout;

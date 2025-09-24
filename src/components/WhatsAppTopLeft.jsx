import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppTopLeft.css';

const WhatsAppTopLeft = () => {
  const phoneNumber = '+2482668292'; // +248 2 668 292 formatted for WhatsApp
  const message = 'Hello! I would like to know more about your services.';
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="whatsapp-top-left" onClick={handleWhatsAppClick}>
      <FaWhatsapp className="whatsapp-icon" />
      <div className="whatsapp-tooltip">
        Chat with us on WhatsApp
      </div>
    </div>
  );
};

export default WhatsAppTopLeft;

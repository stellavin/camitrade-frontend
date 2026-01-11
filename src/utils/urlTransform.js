export const formatServiceId = (id) => {
  return id
    .replace(/_/g, '-')
    .toLowerCase();
};

export const parseServiceId = (id) => {
  return id
    .replace(/-/g, '_')
    .toUpperCase();
};

// WhatsApp utility function
export const getWhatsAppUrl = (message = 'Hello! I would like to know more about your services.') => {
  const phoneNumber = '+2482668292';
  const phoneDigits = phoneNumber.replace(/[^\d]/g, '');
  return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;
}; 
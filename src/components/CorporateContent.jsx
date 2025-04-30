import React, { useEffect, useState } from 'react';
import servicesData from '../jsonData/MainServices';
import { useLocation, useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon
} from 'react-share';
import { FaShareAlt } from 'react-icons/fa';

const ServiceCard = ({ service, onClick, showDetails }) => {
  return (
    <div
      className={`service-option ${showDetails ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="service-header">
        <h2 className="service-name">{service}</h2>
      </div>
    </div>
  );
};

const CorporateContent = ({ handleSetName }) => {
  const services = servicesData.CorporateServices;
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const rawServiceId = searchParams.get('id');
  
  // Convert the URL parameter to match the services object key format
  const serviceId = rawServiceId
    ?.replace(/-/g, '_')
    ?.replace(/\([^)]*\)/g, '')  // Remove parentheses and their contents
    ?.replace(/\s+/g, '_')       // Replace spaces with underscores
    ?.toUpperCase();

  const [activeService, setActiveService] = useState(0);

  console.log('Raw Service ID:', rawServiceId);
  console.log('Processed Service ID:', serviceId);
  console.log('Available Services:', Object.keys(services));
  console.log('Current Service Data:', services[serviceId]);

  useEffect(() => {
    if (serviceId && services[serviceId]) {
      handleSetName(serviceId);
      const serviceIndex = parseInt(searchParams.get('serviceIndex'), 10) || 0;
      setActiveService(serviceIndex);
    }
  }, [serviceId, searchParams]);

  const handleClick = (index) => {
    setActiveService(index);
    const newUrl = `/corporate?id=${rawServiceId}&serviceIndex=${index}`;
    navigate(newUrl);
  };

  // Get the current service array
  const currentServices = services[serviceId] || [];

  const isMobile = window.innerWidth <= 768;
  const shareUrl = `${window.location.origin}/corporate?id=${rawServiceId}`;

  return (
    <section className="why-choose-us-sec te-pt-70 te-pb-50 te-md-pt-60 te-md-pb-50 te-sm-pt-40 te-sm-pb-20">
      <div className="container">
        <div className="service-container">
          {isMobile && (
            <div className="mobile-service-select">
              <select
                value={activeService}
                onChange={(e) => handleClick(Number(e.target.value))}
              >
                <option value="">Select a service</option>
                {currentServices.map((service, index) => (
                  <option key={index} value={index}>
                    {service.Service}
                  </option>
                ))}
              </select>
            </div>
          )}
          {!isMobile && (
            <div className="service-list">
              <div className="service-card">
                {currentServices.map((service, index) => (
                  <ServiceCard
                    key={index}
                    service={service.Service}
                    onClick={() => handleClick(index)}
                    showDetails={activeService === index}
                  />
                ))}
              </div>
            </div>
          )}
          <div className={`service-details ${isMobile ? 'mobile' : ''}`}>
            <div className="service-content">
              <div className="share-buttons">
                <div className="share-icon">
                  <FaShareAlt size={24} />
                </div>
                <FacebookShareButton url={shareUrl}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <LinkedinShareButton url={shareUrl}>
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <WhatsappShareButton url={shareUrl}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </div>
            </div>
            <div className="service-text">
              {currentServices[activeService]?.Content && (
                <div className="content-wrapper">
                  {currentServices[activeService].Content}
                </div>
              )}
            </div>
            <div>
              <ContactForm 
                heading={'Get in touch'} 
                description={`We're here to help you navigate the process seamlessly. Fill out the form below to get started on your path to success`} 
              />
              <div className="service-content">
                <div className="share-buttons">
                  <div className="share-icon">
                    <FaShareAlt size={24} />
                  </div>
                  <FacebookShareButton url={shareUrl}>
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                  <TwitterShareButton url={shareUrl}>
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <LinkedinShareButton url={shareUrl}>
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                  <WhatsappShareButton url={shareUrl}>
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateContent;

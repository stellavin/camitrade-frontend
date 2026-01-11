import React, { useEffect, useState } from 'react';
import servicesData from '../jsonData/MainServices';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
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

const LicensingServiceList = ({ handleSetName }) => {
  const { id } = useParams();
  const services = servicesData.LicensingServices;
  const location = useLocation();
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(0);
  const [currentServices, setCurrentServices] = useState([]);
  const [currentService, setCurrentService] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(null);

  // Ensure consistent formatting for serviceId
  console.log('new id', id);
  const serviceId = id
    ?.replace(/-/g, '_')
    ?.replace(/\([^)]*\)/g, '')
    ?.replace(/\s+/g, '_')
    ?.replace(/_+/g, '_')
    ?.toLocaleLowerCase();
    console.log('serviceId', serviceId);

  // Normalize services
  const normalizedServices = Object.keys(services).reduce((acc, key) => {
    acc[key.toLowerCase()] = services[key];
    return acc;
  }, {});

  // Helper to find a service and its category by id
  function findServiceAndCategoryById(servicesOrArray, serviceId, id) {
    if (Array.isArray(servicesOrArray)) {
      const found = servicesOrArray.find(service => service.id === id);
      if (found) {
        return { service: found, category: id };
      } else {
        const found = servicesOrArray.find(service => service.id === serviceId);
        return { service: found, category: id };
      }
    } else {
      for (const [category, serviceList] of Object.entries(servicesOrArray)) {
        const found = serviceList.find(service => service.id === id);
        if (found) {
          return { service: found, category };
        }
      }
      return { service: null, category: null };
    }
  }

  // Helper to normalize category keys
  function normalizeKey(key) {
    return key.replace(/-/g, '_').toLowerCase();
  }

  useEffect(() => {
    const normalizedCategoryKey = normalizeKey(id);

    if(serviceId){
      handleSetName(serviceId);
    }

    if (normalizedServices[serviceId]) {
      const { service, category } = findServiceAndCategoryById(normalizedServices[serviceId], serviceId, id);
      setCurrentService(service);
      setCurrentCategory(5);
      setCurrentServices(service ? normalizedServices[serviceId] : []);
    } else {

      const targetId = serviceId;
      console.log('targetId', targetId);
      let foundEntry = null;
      let foundKey = null;
      let foundArr = null;
      
      console.log('Type of normalizedServices:', normalizedServices);
      
      for (const [key, arr] of Object.entries(normalizedServices)) {
        if (Array.isArray(arr)) {
          const index = arr.findIndex(item => item.id === targetId || item.id === id);
          if (index !== -1) {
            foundEntry = arr[index]; // The matching item
            foundKey = key;          // The key in the original object (e.g., "international_business_company_ibc_formation")
            foundArr = arr;          // The full array where it was found
      
            console.log('index-----', index);
            setActiveService(index); // Set active service index (assuming this is a React setter)
            break;
          }
        }
      }
      
      // Optional: Use foundEntry, foundKey, or foundArr as needed
      console.log('Found Entry:', foundEntry);
      console.log('Found Key:', foundKey);
      console.log('Found Array:', foundArr);

      if (foundEntry) {
        setCurrentCategory(normalizedCategoryKey);
        setCurrentServices(foundArr);
        setCurrentService(foundArr[activeService]);
      }
    }
  }, [id, serviceId]);

  const handleClick = (index, service) => {
    setActiveService(index);
    const newUrl = `/licensing-services/${service.id}`;
    navigate(newUrl);
  };

  const isMobile = window.innerWidth <= 768;
  const shareUrl = `${window.location.origin}/licensing-services/${id}`;

  return (
    <section className="corporate-services-sec te-pt-100 te-pb-100 te-md-pt-70 te-md-pb-70 te-sm-pt-50 te-sm-pb-50">
      <div className="container">
        <div className="service-container">
          {isMobile && (
            <div className="mobile-service-select">
              <select
                value={activeService}
                onChange={(e) => handleClick(Number(e.target.value), currentServices[Number(e.target.value)])}
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
                    onClick={() => handleClick(index, service)}
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
                heading={'Request a Free Consultation'} 
                description={'No obligation • Confidential • 30-minute expert call • We respond within 24 hours'} 
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

export default LicensingServiceList;

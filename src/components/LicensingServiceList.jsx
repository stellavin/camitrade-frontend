import React, { useEffect, useState, useCallback } from 'react';
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
  const serviceId = id
    ?.replace(/-/g, '_')
    ?.replace(/\([^)]*\)/g, '')
    ?.replace(/\s+/g, '_')
    ?.replace(/_+/g, '_')
    ?.toLocaleLowerCase();

  // Normalize services
  const normalizedServices = Object.keys(services).reduce((acc, key) => {
    acc[key.toLowerCase()] = services[key];
    return acc;
  }, {});

  // Helper to find a service and its category by id
  const findServiceAndCategoryById = useCallback((servicesOrArray, serviceId, id) => {
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
  }, []);

  // Helper to normalize category keys
  const normalizeKey = useCallback((key) => {
    return key.replace(/-/g, '_').toLowerCase();
  }, []);

  // Update service state
  const updateServiceState = useCallback((services, index, category) => {
    setCurrentServices(services);
    setCurrentService(services[index]);
    setActiveService(index);
    setCurrentCategory(category);
  }, []);

  useEffect(() => {
    const normalizedCategoryKey = normalizeKey(id);

    if (normalizedServices[serviceId]) {
      const { service, category } = findServiceAndCategoryById(normalizedServices[serviceId], serviceId, id);
      if (service) {
        updateServiceState(normalizedServices[serviceId], 0, 5);
      }
    } else {
      const targetId = serviceId;
      let foundEntry = null;
      let foundArr = null;
      let foundIndex = 0;

      for (const [key, arr] of Object.entries(normalizedServices)) {
        if (Array.isArray(arr)) {
          const index = arr.findIndex(item => item.id === targetId);
          if (index !== -1) {
            foundEntry = arr[index];
            foundArr = arr;
            foundIndex = index;
            break;
          }
        }
      }

      if (foundEntry) {
        updateServiceState(foundArr, foundIndex, normalizedCategoryKey);
      }
    }
  }, [id, serviceId, normalizedServices, findServiceAndCategoryById, normalizeKey, updateServiceState]);

  const handleClick = useCallback((index, service) => {
    setActiveService(index);
    const newUrl = `/licensing-services/${service.id}`;
    navigate(newUrl);
  }, [navigate]);

  const isMobile = window.innerWidth <= 768;
  const shareUrl = `${window.location.origin}/licensing-services/${id}`;

  return (
    <section className="why-choose-us-sec te-pt-70 te-pb-50 te-md-pt-60 te-md-pb-50 te-sm-pt-40 te-sm-pb-20">
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
                heading={'Get in touch with us'} 
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

export default LicensingServiceList;

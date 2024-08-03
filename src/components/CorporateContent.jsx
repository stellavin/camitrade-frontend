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

const ServiceCard = ({ country, service, flag, onClick, showDetails }) => {
  return (
    <div
      className={`service-option ${showDetails ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="service-header">
        <h2 className="service-name">{country} {service}</h2>
      </div>
    </div>
  );
};

const CorporateContent = ({ handleSetName }) => {
  const services = servicesData.CorporateServices;
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const serviceId = searchParams.get('id');
  const [activeService, setActiveService] = useState(0);

  const handleClick = (index, service) => {
    console.log(service);
    setActiveService(index);
    const newUrl = `/corporate?id=${serviceId}&serviceIndex=${index}`;
    navigate(newUrl);
  };

  useEffect(() => {
    if (serviceId && services[serviceId]) {
      handleSetName(serviceId);
      const serviceIndex = parseInt(searchParams.get('serviceIndex'), 10) || 0;
      setActiveService(serviceIndex);
    }
  }, [serviceId, searchParams]);

  const isMobile = window.innerWidth <= 768;

  const serviceOptions = services[serviceId]?.map((service, index) => (
    <option key={index} value={index}>
      {service.Country} {service.Service}
    </option>
  ));

  // Construct the share URL
  const shareUrl = `${window.location.origin}/corporate?id=${serviceId}`;

  return (
    <section className="why-choose-us-sec te-pt-70 te-pb-50 te-md-pt-60 te-md-pb-50 te-sm-pt-40 te-sm-pb-20">
      <div className="container">
        <div className="service-container">
          {isMobile && (
            <div className="mobile-service-select">
              <select
                value={activeService}
                onChange={(e) => handleClick(Number(e.target.value), services[serviceId][Number(e.target.value)])}
              >
                <option value={0}>Select a service</option>
                {serviceOptions}
              </select>
            </div>
          )}
          {!isMobile && (
            <div className="service-list">
              <div className="service-card">
                {services[serviceId]?.map((service, index) => (
                  <div key={index}>
                    {service.Service === 'Free Zone Company Solutions' ? (
                      <div>
                        <h2 className="FreeZone">Free Zone Company Solutions</h2>
                        {service?.Content?.map((service, index) => (
                          <ServiceCard
                            key={index}
                            country={service?.Country}
                            service={service?.Service}
                            flag={service?.Flag}
                            onClick={() => handleClick(index, service)}
                            showDetails={activeService === index}
                          />
                        ))}
                      </div>
                    ) : (
                      <ServiceCard
                        key={index}
                        country={service?.Country}
                        service={service?.Service}
                        flag={service?.Flag}
                        onClick={() => handleClick(index, service)}
                        showDetails={activeService === index}
                      />
                    )}
                  </div>
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
                {activeService !== null && (
                  <React.Fragment>{services[serviceId][activeService]?.Content}</React.Fragment>
                )}
              </div>
            

            <div>
              
              <ContactForm heading={'Get in touch'} description={`We're here to help you navigate the process seamlessly. Fill out the form below to get started on your path to success`} />

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

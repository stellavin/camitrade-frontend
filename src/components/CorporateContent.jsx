import React, { useEffect, useState } from 'react';
import servicesData from '../jsonData/MainServices';
import { useLocation } from 'react-router-dom';

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
  const searchParams = new URLSearchParams(location.search);
  const serviceId = searchParams.get('id');
  const [activeService, setActiveService] = useState(0);
  const SelectedService = serviceId;

  const handleClick = (index, service) => {
    setActiveService(index === activeService ? 0 : index);
  };

  useEffect(() => {
    handleSetName(serviceId);
    setActiveService(0);
  }, [serviceId]);


  const isMobile = window.innerWidth <= 768; // Define your mobile breakpoint here

  const serviceOptions = services[SelectedService]?.map((service, index) => (
    <option key={index} value={index}>
      {service.Country} {service.Service}
    </option>
  ));

  return (
    <section className="why-choose-us-sec te-pt-70 te-pb-50 te-md-pt-60 te-md-pb-50 te-sm-pt-40 te-sm-pb-20">
      <div className="container">
          <div className="service-container">
          {isMobile && (
              <div className="mobile-service-select">
                <select
                  value={activeService}
                  onChange={(e) => handleClick(Number(e.target.value), services[SelectedService][Number(e.target.value)])}
                >
                  <option value={0}>Select a service</option>
                  {serviceOptions}
                </select>
              </div>
            )}
            {!isMobile && (
              <div className="service-list">
                <div className="service-card">
                  {services[SelectedService]?.map((service, index) => (
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
              {activeService !== null && (
                <div>
                  <React.Fragment>{services[SelectedService][activeService]?.Content}</React.Fragment>
                </div>
              )}
            </div>
           
          </div>
        </div>
    </section>
  );
};

export default CorporateContent;
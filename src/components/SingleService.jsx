import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import { formatServiceId } from '../utils/urlTransform';

const SingleService = ({ type, service }) => {
    let { serviceIcon, serviceTitle, serviceText, serviceBtn, delay, id, countriesFlags } = service;
    console.log('services-------', service);

    return (
        <>
        { type === 'Corporate' ? (
             <Fade right delay={delay}>
             <div className="col-lg-4 col-md-6 d-lg-flex d-md-flex">
                 <div className="service-item">
                     <div className="service-content">
                         
                         <div className="services-i">
                                 <h2><Link to={`/corporate/${formatServiceId(service.id)}`} className="serviceTitle">{service.title}</Link></h2>
                             </div>
                         <p>{service.intro}</p>
                         <div className="service-button">
                             <Link to={`/corporate/${formatServiceId(service.id)}`} className='link-hover'>Read More</Link>
                         </div>
                         
                     </div>
                 </div>
             </div>
         </Fade>

        ) : type === 'Licensing' ? (
            <Fade right delay={delay}>
            <div className="col-lg-4 col-md-6 d-lg-flex d-md-flex">
                <div className="service-item">
                    <div className="service-content">
                        
                        <div className="services-i">
                                <h2><Link to={`/licensing-services/${service.id}`} className="serviceTitle">{service.title}</Link></h2>
                            </div>
                        <p>{service.text}</p>
                        <div className="service-button">
                            <Link to={`/licensing-services/${service.id}`} className='link-hover'>Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>

        ) :(
            <Fade right delay={delay}>
            <div className="col-lg-4 col-md-6 d-lg-flex d-md-flex">
                <div className="service-item">
                    <div className="service-content">
                        
                        <div className="services-i">
                                <h2>
                                    <Link to={`/other-services/${id.replace(/_/g, '-')}`} className="serviceTitle">
                                        {serviceTitle}
                                    </Link>
                                </h2>
                            </div>
                        <p>{serviceText}</p>
                        <div className="service-button">
                            <Link to={`/other-services/${id.replace(/_/g, '-')}`} className='link-hover'>
                                {serviceBtn}
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Fade>
        )
        }
        </>
    );
};

export default SingleService;
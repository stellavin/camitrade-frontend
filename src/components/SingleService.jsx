import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import { formatServiceId } from '../utils/urlTransform';

const SingleService = ({ type, service }) => {
    let { serviceIcon, serviceTitle, serviceText, serviceBtn, delay, id, countriesFlags } = service;
    console.log('services-------', service);

    return (
        <>
        { type === 'corporate' ? (
             <Fade right delay={delay}>
             <div className="col-lg-4 col-md-6 d-lg-flex d-md-flex">
                 <div className="service-item">
                     <div className="service-content">
                         
                         <div className="services-i">
                                 <h2><Link to={`/corporate-services/${formatServiceId(service?.id)}`} className="serviceTitle">{service.title}</Link></h2>
                             </div>
                         <p>{service.intro}</p>
                         <div className="service-button">
                             <Link to={`/corporate-services/${formatServiceId(service?.id)}`} className='link-hover'>Talk to an Expert</Link>
                         </div>
                         
                     </div>
                 </div>
             </div>
         </Fade>

        ) : type === 'licensing' ? (
            <Fade right delay={delay}>
            <div className="col-lg-4 col-md-6 d-lg-flex d-md-flex">
                <div className="service-item">
                    <div className="service-content">
                        
                        <div className="services-i">
                                <h2><Link to={`/licensing-services/${service?.id}`} className="serviceTitle">{service.title}</Link></h2>
                            </div>
                        <p>{service.text}</p>
                        <div className="service-button">
                            <Link to={`/licensing-services/${service?.id}`} className='link-hover'>Talk to a Licensing Specialist</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>

        ) : type === 'other-services' ?(
            <Fade right delay={delay}>
            <div className="col-lg-4 col-md-6 d-lg-flex d-md-flex">
                <div className="service-item">
                    <div className="service-content">
                    <div className="services-i">
                                <h2><Link to={`/other-services/${service?.id}`} className="serviceTitle">{service.title}</Link></h2>
                            </div>
                        <p>{service.text}</p>
                        <div className="service-button">
                            <Link to={`/other-services/${service?.id}`} className='link-hover'>Get Expert Advice</Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Fade>
        ): (
            <></>
        )
        }
        </>
    );
};

export default SingleService;
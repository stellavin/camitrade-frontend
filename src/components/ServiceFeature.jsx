import React, { useState } from 'react';
import SingleService from './SingleService';
import AllCorporateData from '../jsonData/CorporateMainData.json';
import { useLocation, useParams } from 'react-router-dom';
import LicenseData from '../jsonData/licensingData.json'
import OtherServicesData from '../jsonData/OtherServicesData.json'

const ServiceFeature = ({setServiceName}) => {
    console.log('here ==========');
    const location = useLocation();
    const { id } = useParams(); // Get ID from path parameter
    
    // Handle the service ID without any transformation for direct matches
    const serviceId = id || location.pathname.split('/').pop();
    console.log('get data ==========', serviceId);
    setServiceName(serviceId);

    useState(()=> {
        console.log('AllCorporateData', AllCorporateData);
        setServiceName(serviceId);   
    })

    return (
        <>
            <section className="why-choose-us-modern te-pt-100 te-pb-100 te-md-pt-70 te-md-pb-70 te-sm-pt-50 te-sm-pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 text-center">
                            <div className="sec-title corporate-title">
                            {
                            serviceId === 'other-services' && (
                                <>
                                    <span className="section-label">Our Services</span>
                                    <h1>Our Other Services</h1>
                                </>
                            )}
                             {
                            serviceId === 'licensing' && (
                                <>
                                    <span className="section-label">Our Services</span>
                                    <h1>Our Licensing Services</h1>
                                </>
                            )}
                             {
                            serviceId === 'corporate' && (
                                <>
                                    <span className="section-label">Our Services</span>
                                    <h1>Our Corporate Services</h1>
                                </>
                            )}   
                            </div>
                        </div>
                    </div>
                    {
                    serviceId === 'licensing' && (
                        <div className="row g-4">
                            {LicenseData.map((service, index) =>
                                <SingleService  type="licensing" service={service} index={index} key={service.id} />
                            )}
                        </div>
                    )
                   }
                   {
                    (serviceId === 'other-services') && (
                        <div className="row g-4">
                            {OtherServicesData.map((service, index) =>
                                <SingleService type="other-services" service={service} index={index} key={service.id} />
                            )}
                        </div>
                    )
                   }

                   {
                    serviceId === 'corporate' && (
                        <div className="row g-4">
                            {AllCorporateData.map((service, index) =>
                                <SingleService type="corporate" service={service} index={index} key={service.id} />
                            )}
                        </div>
                    )
                   }
                    
                </div>
            </section>
        </>
    );
};

export default ServiceFeature;
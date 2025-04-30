import React, { useState } from 'react';
import FeatureData from '../jsonData/ServiceMainData.json'
import SingleService from './SingleService';
import AllCorporateData from '../jsonData/CorporateMainData.json';
import { useLocation, useParams } from 'react-router-dom';
import LicenseData from '../jsonData/licensingData.json'

const ServiceFeature = ({setServiceName}) => {
    console.log('here ==========');
    const location = useLocation();
    const { id } = useParams(); // Get ID from path parameter
    // Convert hyphenated URL back to underscore format for internal use
    const serviceId = id?.replace(/-/g, '_');
    console.log('get data ==========', serviceId);
    setServiceName(serviceId);

    useState(()=> {
        console.log('AllCorporateData', AllCorporateData);
        setServiceName(serviceId);   
    })

    return (
        <>
            <section className="why-choose-us-sec te-pt-100 te-pb-80 te-md-pt-70 te-md-pb-50 te-sm-pt-40 te-sm-pb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 text-center">
                            <div className="sec-title">
                            {
                            serviceId === 'Other_services' && (
                                <h1>Our Other Services</h1>
                            )}
                             {
                            serviceId === 'Licensing' && (
                                <h1>Our Licensing Services</h1>
                            )}
                             {
                            serviceId === 'Corporate' && (
                                <h1>Our Corporate Services</h1>
                            )}   
                            </div>
                        </div>
                    </div>
                    {
                    serviceId === 'Licensing' && (
                        <div className="row">
                            {LicenseData.map(service =>
                                <SingleService  type="Licensing" service={service} key={service.id} />
                            )}
                        </div>
                    )
                   }
                   {
                    serviceId === 'Other_services' && (
                        <div className="row">
                            {FeatureData.map(service =>
                                <SingleService service={service} key={service.id} />
                            )}
                        </div>
                    )
                   }

                   {
                    serviceId === 'Corporate' && (
                        <div className="row">
                            {AllCorporateData.map(service =>
                                <SingleService type="Corporate" service={service} key={service.id} />
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
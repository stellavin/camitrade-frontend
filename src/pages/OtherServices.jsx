import React, { useState } from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import ServiceList from '../components/ServiceList';
import CanonicalHeaders from '../components/CanonicalHeaders';

const OtherServices = () => {
    const [serviceName, setServiceName]=useState('Other Services');

    console.log('service name----', serviceName);
    return (
        <>
        <CanonicalHeaders
                title ={`We Offer ${serviceName.replace("_", " ")} Services`}
                description ={`Camitrade Fiduciaries Offers ${serviceName.replace("_", " ")} Services Globally | Mauritius | Seychelles | South Africa | Dubai| UAE | Cook Islands | Curacao`}
            />
            <Header />
            <Breadcrumbs pageTitle={serviceName.replace(/_/g, ' ')}/>
            <ServiceList handleSetName={setServiceName}/>
            <Footer />
        </>
    );
};

export default OtherServices;
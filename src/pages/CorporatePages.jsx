
import React, { useState } from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import CorporateContent from '../components/CorporateContent';
import CanonicalHeaders from '../components/CanonicalHeaders';

const CorporateServices = () => {
    const [serviceName, setServiceName]=useState('Licensing Services');
    return (
        <>
            <CanonicalHeaders
            title ={`We Offer ${serviceName.replace(/_/g, " ")}`}
            description ={`Camitrade Fiduciaries Offers ${serviceName.replace(/_/g, " ")} Services Globally | Mauritius | Seychelles | South Africa | Dubai| UAE | Cook Islands | Curacao`}
            />
            <Header />
            <Breadcrumbs pageTitle={serviceName.replace(/_/g, ' ')}/>
            <CorporateContent handleSetName={setServiceName}/>
            <Footer />
        </>
    );
};

export default CorporateServices;
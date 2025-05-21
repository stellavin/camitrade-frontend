import React, { useState } from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import LicensingServiceList from '../components/LicensingServiceList';
import CanonicalHeaders from '../components/CanonicalHeaders';

const LicensingServices = () => {
    const [serviceName, setServiceName]=useState('Licensing Services');
    
    const toSentenceCase = (str) => {
        return str.replace(/_/g, " ")
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <>
         <CanonicalHeaders
               title ={`${toSentenceCase(serviceName)} | Expert Licensing Solutions`}
               description ={`Get expert guidance on ${toSentenceCase(serviceName)}. Fast, reliable service with 100% compliance. Start your application today and get professional support.`}
            />
            <Header />
            <Breadcrumbs pageTitle={toSentenceCase(serviceName)}/>
            <LicensingServiceList handleSetName={setServiceName}/>
            <Footer />
        </>
    );
};

export default LicensingServices;
import React, { useState } from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import LicensingServiceList from '../components/LicensingServiceList';
import CanonicalHeaders from '../components/CanonicalHeaders';

const LicensingServices = () => {
    const [serviceName, setServiceName]=useState('Licensing Services');
    return (
        <>
         <CanonicalHeaders
                title ={`${serviceName}| We ensure legal compliance and sustainable growth.`}
                description ="Camitrade Fiduciaries provides global company incorporation and administration services, Licensing services and Payment solutions"
            />
            <Header />
            <Breadcrumbs pageTitle={serviceName.replace(/_/g, ' ')}/>
            <LicensingServiceList handleSetName={setServiceName}/>
            <Footer />
        </>
    );
};

export default LicensingServices;
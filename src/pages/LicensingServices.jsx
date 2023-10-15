import React, { useState } from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import LicensingServiceList from '../components/LicensingServiceList';

const LicensingServices = () => {
    const [serviceName, setServiceName]=useState('Licensing Services');
    return (
        <>
            <Header />
            <Breadcrumbs pageTitle={serviceName.replace(/_/g, ' ')}/>
            <LicensingServiceList handleSetName={setServiceName}/>
            <Footer />
        </>
    );
};

export default LicensingServices;

import React, { useState } from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import CorporateContent from '../components/CorporateContent';

const CorporateServices = () => {
    const [serviceName, setServiceName]=useState('Licensing Services');
    console.log('here========1');
    return (
        <>
            <Header />
            <Breadcrumbs pageTitle={serviceName.replace(/_/g, ' ')}/>
            <CorporateContent handleSetName={setServiceName}/>
            <Footer />
        </>
    );
};

export default CorporateServices;
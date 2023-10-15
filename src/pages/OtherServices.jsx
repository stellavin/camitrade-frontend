import React, { useState } from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import ServiceList from '../components/ServiceList';

const OtherServices = () => {
    const [serviceName, setServiceName]=useState('Other Services');
    return (
        <>
            <Header />
            <Breadcrumbs pageTitle={serviceName.replace(/_/g, ' ')}/>
            <ServiceList handleSetName={setServiceName}/>
            <Footer />
        </>
    );
};

export default OtherServices;
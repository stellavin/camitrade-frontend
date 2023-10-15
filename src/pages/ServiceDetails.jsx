import React from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import ServiceDetailsContent from '../components/ServiceDetailsContent';
import Footer from '../components/Footer';

const ServiceDetails = () => {
    return (
        <>
            <Header />
            <Breadcrumbs pageTitle="Service Details" />
            <ServiceDetailsContent />
            <Footer />
        </>
    );
};

export default ServiceDetails;
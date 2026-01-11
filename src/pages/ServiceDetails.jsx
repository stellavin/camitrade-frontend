import React from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import ServiceDetailsContent from '../components/ServiceDetailsContent';
import Footer from '../components/Footer';
import CanonicalHeaders from '../components/CanonicalHeaders';

const ServiceDetails = () => {
    return (
        <>
            <CanonicalHeaders
                title="Service Details | Professional Business Solutions - Camitrade"
                description="Explore our comprehensive service details. Get expert guidance on professional business solutions with 100% compliance and fast processing."
                schemaType="Service"
                serviceName="Business Solutions"
                serviceDescription="Professional business solutions with expert guidance, 100% compliance, and fast processing"
            />
            <Header />
            <Breadcrumbs pageTitle="Service Details" />
            <ServiceDetailsContent />
            <Footer />
        </>
    );
};

export default ServiceDetails;
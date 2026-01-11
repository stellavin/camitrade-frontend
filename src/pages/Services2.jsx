import React from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Service from '../components/Service';
import Footer from '../components/Footer';
import CanonicalHeaders from '../components/CanonicalHeaders';

const Services2 = () => {
    return (
        <>
            <CanonicalHeaders
                title="Services | Professional Business Solutions - Camitrade"
                description="Explore our comprehensive range of professional business solutions. Expert services for company incorporation, licensing, and corporate administration."
                schemaType="Service"
                serviceName="Business Solutions"
                serviceDescription="Comprehensive range of professional business solutions including company incorporation, licensing, and corporate administration"
            />
            <Header />
            <Breadcrumbs pageTitle="Services Two" />
            <Service />
            <Footer />
        </>
    );
};

export default Services2;
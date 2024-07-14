import React from 'react';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import Header from '../components/Header';
import Jurisdiction from '../components/Jurisdiction';
import CanonicalHeaders from '../components/CanonicalHeaders';

const Jurisdictions = () => {
    return (
        <>
            <CanonicalHeaders
                title ="About Us | We ensure legal compliance and sustainable growth."
                description ="Camitrade Fiduciaries provides global company incorporation and administration services, Licensing services and Payment solutions"
            />
            <Header />
            <Breadcrumbs pageTitle="Jurisdictions" />
            <Jurisdiction/>
            <Footer />
        </>
    );
};

export default Jurisdictions;
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
                title ="Jurisdictions | Global Incorporation and administration services"
                description ="Camitrade Investment Fiduciaries offer Global Solutions For Businesses And Individuals Looking to go Global"
            />
            <Header />
            <Breadcrumbs pageTitle="Jurisdictions" />
            <Jurisdiction/>
            <Footer />
        </>
    );
};

export default Jurisdictions;
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
                title ="Global Jurisdictions | International Business Incorporation Services"
                description ="Explore our comprehensive global jurisdiction services. We provide expert guidance for international business incorporation, administration, and compliance across multiple jurisdictions worldwide."
            />
            <Header />
            <Breadcrumbs pageTitle="Jurisdictions" />
            <Jurisdiction/>
            <Footer />
        </>
    );
};

export default Jurisdictions;
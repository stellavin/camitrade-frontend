import React from 'react';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import Header from '../components/Header';
import Jurisdiction from '../components/Jurisdiction';

const Jurisdictions = () => {
    return (
        <>
            <Header />
            <Breadcrumbs pageTitle="Jurisdictions" />
            <Jurisdiction/>
            <Footer />
        </>
    );
};

export default Jurisdictions;
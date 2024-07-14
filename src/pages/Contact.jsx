import React from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import ContactPageContent from '../components/ContactPageContent';
import Footer from '../components/Footer';
import CanonicalHeaders from '../components/CanonicalHeaders';

const Contact = () => {
    return (
        <>
        <CanonicalHeaders
                title ="About Us | We ensure legal compliance and sustainable growth."
                description ="Camitrade Fiduciaries provides global company incorporation and administration services, Licensing services and Payment solutions"
            />
            <Header />
            <Breadcrumbs pageTitle={"Contact Us"} />
            <ContactPageContent />
            <Footer />
        </>
    );
};

export default Contact;
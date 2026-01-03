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
                title ="Contact Us | Camitrade Fiduciaries - Get in Touch"
                description ="Contact Camitrade Fiduciaries for global company incorporation, administration services, licensing services and payment solutions. Get expert guidance today."
                schemaType="ContactPage"
            />
            <Header />
            <Breadcrumbs pageTitle={"Contact Us"} />
            <ContactPageContent />
            <Footer />
        </>
    );
};

export default Contact;
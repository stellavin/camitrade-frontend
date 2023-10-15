import React from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import ContactPageContent from '../components/ContactPageContent';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <>
            <Header />
            <Breadcrumbs pageTitle={"Contact Us"} />
            <ContactPageContent />
            <Footer />
        </>
    );
};

export default Contact;
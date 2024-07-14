import React from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Faq from '../components/Faq';
import Counter from '../components/Counter';
import Service from '../components/Service';
import Footer from '../components/Footer';
import CanonicalHeaders from '../components/CanonicalHeaders';

const About = () => {
    return (
        <>
           
            <CanonicalHeaders
            title ="About Us | We ensure legal compliance and sustainable growth."
            description ="Camitrade Fiduciaries provides global company incorporation and administration services, Licensing services and Payment solutions"
            />
            <Header />
            <Breadcrumbs pageTitle="About Us" />
            <Faq aboutus/>
            <Counter />
            <Service aboutus />
            {/* <Consultation /> */}
            {/* <Testimonial /> */}
            <Footer />
        </>
    );
};

export default About;
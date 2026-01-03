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
            title ="About Camitrade Fiduciaries | Your Trusted Global Business Partner"
            description ="Discover how we deliver excellence in global business solutions. We specialize in company incorporation, licensing services, and comprehensive payment solutions with a focus on compliance and growth."
            schemaType="WebPage"
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
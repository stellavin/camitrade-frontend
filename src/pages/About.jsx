import React from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Faq from '../components/Faq';
import Counter from '../components/Counter';
import Service from '../components/Service';
import Consultation from '../components/Consultation';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const About = () => {
    const location = useLocation();
    const canonicalUrl = `https://www.camitrade.com${location.pathname}`;
    return (
        <>
            <Helmet>
                <title>About Us | We ensure legal compliance and sustainable growth.</title>
                <meta name="description" content="Camitrade Fiduciaries provides global company incorporation and administration services, Licensing services and Payment solutions" />
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
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
import React from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Faq from '../components/Faq';
import Counter from '../components/Counter';
import Service from '../components/Service';
import Consultation from '../components/Consultation';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

const About = () => {
    return (
        <>
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
import React from 'react';
import Header from '../components/Header';
import BannerSlider from '../components/BannerSlider';
import Feature from '../components/Feature';
import Faq from '../components/Faq';
import Counter from '../components/Counter';
import AboutUs from '../components/AboutUs';
import Consultation from '../components/Consultation';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const   Home = () => {
    const location = useLocation();
    const canonicalUrl = `https://www.camitrade.com${location.pathname}`;
  
    return (
        <>
            <Helmet>
                <title>Fiduciary & Licenses Services - Camitrade Services Registrars</title>
                <meta name="description" content="Camitrade Fiduciaries Limited is licensed globally by Financial Services Authority for Trust & Corporate Services" />
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
            <Header />
            <BannerSlider/>
            <Feature />
            <AboutUs />
            <Faq bgGray={"bg-gray"} />
            <Counter />
            <Consultation />
            <Testimonial parallaxTestimonial={"testimonial-sec"} />
            <Footer />
        </>
    );
};

export default Home;
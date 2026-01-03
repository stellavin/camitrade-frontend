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
import CanonicalHeaders from '../components/CanonicalHeaders';
import SnowEffect from '../components/SnowEffect';
import GlitterEffect from '../components/GlitterEffect';

const   Home = () => {
    return (
        <>
            <CanonicalHeaders
            title ="Global Fiduciary & Licensing Services | Camitrade Fiduciaries"
            description ="Trusted global fiduciary services provider offering comprehensive licensing, corporate services, and business solutions. Licensed by Financial Services Authority for Trust & Corporate Services."
            />
            <SnowEffect />
            <GlitterEffect />
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
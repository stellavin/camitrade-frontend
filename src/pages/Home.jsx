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

const   Home = () => {
    return (
        <>
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
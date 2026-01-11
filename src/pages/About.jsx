import React from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import CanonicalHeaders from '../components/CanonicalHeaders';
import Consultation from '../components/Consultation';
import Testimonial from '../components/Testimonial';
import Counter from '../components/Counter';
import SnowEffect from '../components/SnowEffect';
import GlitterEffect from '../components/GlitterEffect';
import OurStory from '../components/OurStory';
import WhyWeExist from '../components/WhyWeExist';
import OurApproach from '../components/OurApproach';
import ExperiencePerspective from '../components/ExperiencePerspective';
import GlobalPerspective from '../components/GlobalPerspective';
import OurCommitment from '../components/OurCommitment';
import AboutCTA from '../components/AboutCTA';
import ModernFaq from '../components/ModernFaq';

const About = () => {
    return (
        <>
            <CanonicalHeaders
            title ="About Camitrade Investment Fiduciaries | Our Story, Philosophy & Approach"
            description ="Learn why Camitrade Investment Fiduciaries was founded to solve regulatory and compliance challenges in global business advisory. Discover our compliance-first approach, regulatory expertise, and commitment to long-term client success across finance, fintech, crypto, insurance, and payments."
            schemaType="WebPage"
            />
            <SnowEffect />
            <GlitterEffect />
            <Header />
            <Breadcrumbs pageTitle="About Us" />
            <OurStory />
            <WhyWeExist />
            <OurApproach />
            <ExperiencePerspective />
            <GlobalPerspective />
            <OurCommitment />
            <Counter />
            <AboutCTA />
            <ModernFaq />
            <Testimonial parallaxTestimonial={"testimonial-sec"} />
            <Consultation />
            <Footer />
        </>
    );
};

export default About;
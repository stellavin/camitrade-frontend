import React from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Faq from '../components/Faq';
import Counter from '../components/Counter';
import Service from '../components/Service';
import Footer from '../components/Footer';
import CanonicalHeaders from '../components/CanonicalHeaders';
import ConversationalCTA from '../components/ConversationalCTA';
import FooterCTA from '../components/FooterCTA';

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
            <ConversationalCTA 
                heading="Ready to incorporate, license, or expand globally?"
                message="Our experts will guide you step by step — compliantly and efficiently."
                primaryButtonText="Book a Free Consultation"
                primaryButtonLink="/contact"
                secondaryButtonText="Speak to a Global Advisor"
                secondaryButtonLink="/contact"
                variant="about"
            />
            {/* <Consultation /> */}
            {/* <Testimonial /> */}
            <FooterCTA />
            <Footer />
        </>
    );
};

export default About;
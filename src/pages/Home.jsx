import React from 'react';
import Header from '../components/Header';
import BannerSlider from '../components/BannerSlider';
import TrustSignals from '../components/TrustSignals';
import WhoWeHelp from '../components/WhoWeHelp';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import IndustriesWeServe from '../components/IndustriesWeServe';
import Feature from '../components/Feature';
import AboutUs from '../components/AboutUs';
import ConversationalCTA from '../components/ConversationalCTA';
import Faq from '../components/Faq';
import Counter from '../components/Counter';
import Consultation from '../components/Consultation';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import CanonicalHeaders from '../components/CanonicalHeaders';
import SnowEffect from '../components/SnowEffect';
import GlitterEffect from '../components/GlitterEffect';
import FooterCTA from '../components/FooterCTA';

const   Home = () => {
    return (
        <>
            <CanonicalHeaders
            title ="Global Fiduciary & Licensing Services | Camitrade Fiduciaries"
            description ="We help businesses incorporate, license, and operate globally — compliantly and efficiently across 10+ jurisdictions. Trusted by fintech founders, fund managers, and international entrepreneurs."
            schemaType="WebPage"
            />
            <SnowEffect />
            <GlitterEffect />
            <Header />
            <BannerSlider/>
            <TrustSignals />
            <WhoWeHelp />
            <HowItWorks />
            <WhyChooseUs />
            <IndustriesWeServe />
            <Feature />
            <AboutUs />
            <ConversationalCTA 
                heading="Ready to incorporate, license, or expand globally?"
                message="Our experts will guide you step by step — compliantly and efficiently."
                primaryButtonText="Book a Free Consultation"
                primaryButtonLink="/contact"
                secondaryButtonText="Speak to a Global Advisor"
                secondaryButtonLink="/contact"
            />
            <Faq bgGray={"bg-gray"} />
            <Counter />
            <Consultation />
            <Testimonial parallaxTestimonial={"testimonial-sec"} />
            <FooterCTA />
            <Footer />
        </>
    );
};

export default Home;
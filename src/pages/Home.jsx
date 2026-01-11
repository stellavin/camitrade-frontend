import React from 'react';
import Header from '../components/Header';
import BannerSlider from '../components/BannerSlider';
import TrustSignals from '../components/TrustSignals';
import WhoIsCamitrade from '../components/WhoIsCamitrade';
import WhoWeHelp from '../components/WhoWeHelp';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import IndustriesWeServe from '../components/IndustriesWeServe';
import Feature from '../components/Feature';
import Counter from '../components/Counter';
import Consultation from '../components/Consultation';
import Testimonial from '../components/Testimonial';
import ModernFaq from '../components/ModernFaq';
import Footer from '../components/Footer';
import CanonicalHeaders from '../components/CanonicalHeaders';
import SnowEffect from '../components/SnowEffect';
import GlitterEffect from '../components/GlitterEffect';

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
            <WhoIsCamitrade />
            <WhoWeHelp />
            <Feature />
            <HowItWorks />
            <WhyChooseUs />
            <IndustriesWeServe />
            <Counter />
            <Consultation />
            <Testimonial parallaxTestimonial={"testimonial-sec"} />
            <ModernFaq />
            <Footer />
        </>
    );
};

export default Home;
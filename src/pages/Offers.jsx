import React, {useState} from 'react';
import Header from '../components/Header';
import BannerSlider from '../components/BannerSlider';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import OffersServiceList from '../components/Offers';
import CanonicalHeaders from '../components/CanonicalHeaders';

const   Offers = () => {
    const [serviceName, setServiceName]=useState('CamiTrade Offers');
    return (
        <>
        <CanonicalHeaders
                title ="Licensing Solutions | Global Financial Services & Trading Licenses"
                description ="Explore our comprehensive licensing solutions across multiple jurisdictions including Kenya, Labuan, Seychelles, South Africa, Mauritius, and Belize. Specializing in brokers/forex, banking, mutual funds, and digital asset licenses."
                schemaType="Offer"
                serviceName="Licensing Solutions"
                serviceDescription="Comprehensive licensing solutions across multiple jurisdictions including Kenya, Labuan, Seychelles, South Africa, Mauritius, and Belize"
            />
            <Header />
            <Breadcrumbs pageTitle='CamiTrade Offers'/>
            <OffersServiceList handleSetName={setServiceName}/>
            <Footer />
        </>
    );
};

export default Offers;
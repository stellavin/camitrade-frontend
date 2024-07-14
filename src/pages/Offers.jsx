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
                title ="Offers |Licences |kenya |Labuan |Seychelles |SA |Mauritius |Belize"
                description ="Camitrade Fiduciaries offers global licensing services covering brokers/forex, bank opening, mutual funds, cryptocurrencies, and digital assets."
            />
            <Header />
            <Breadcrumbs pageTitle='CamiTrade Offers'/>
            <OffersServiceList handleSetName={setServiceName}/>
            <Footer />
        </>
    );
};

export default Offers;
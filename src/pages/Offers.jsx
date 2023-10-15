import React, {useState} from 'react';
import Header from '../components/Header';
import BannerSlider from '../components/BannerSlider';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import OffersServiceList from '../components/Offers';

const   Offers = () => {
    const [serviceName, setServiceName]=useState('CamiTrade Offers');
    return (
        <>
            <Header />
            <Breadcrumbs pageTitle='CamiTrade Offers'/>
            <OffersServiceList handleSetName={setServiceName}/>
            <Footer />
        </>
    );
};

export default Offers;
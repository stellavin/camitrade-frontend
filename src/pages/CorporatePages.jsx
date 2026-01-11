import React, { useState } from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import CorporateContent from '../components/CorporateContent';
import CanonicalHeaders from '../components/CanonicalHeaders';
import Consultation from '../components/Consultation';
import SnowEffect from '../components/SnowEffect';
import GlitterEffect from '../components/GlitterEffect';

const CorporateServices = () => {
    const [serviceName, setServiceName]=useState('Corporate Services');

    const toSentenceCase = (str) => {
        return str.replace(/_/g, " ")
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };
    return (
        <>
           <CanonicalHeaders
               title ={`${toSentenceCase(serviceName)} | Global Business Solutions`}
               description ={`Get expert guidance on ${toSentenceCase(serviceName)}. Fast, reliable service with 100% compliance. Start your application today and get professional support.`}
               schemaType="Service"
               serviceName={toSentenceCase(serviceName)}
               serviceDescription={`Expert guidance on ${toSentenceCase(serviceName)}. Fast, reliable service with 100% compliance.`}
            />
            <SnowEffect />
            <GlitterEffect />
            <Header />
            <Breadcrumbs pageTitle={toSentenceCase(serviceName)}/>
            <CorporateContent handleSetName={setServiceName}/>
            <Consultation />
            <Footer />
        </>
    );
};

export default CorporateServices;
import React, { useState } from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import CorporateContent from '../components/CorporateContent';
import CanonicalHeaders from '../components/CanonicalHeaders';

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
            />
            <Header />
            <Breadcrumbs pageTitle={toSentenceCase(serviceName)}/>
            <CorporateContent handleSetName={setServiceName}/>
            <Footer />
        </>
    );
};

export default CorporateServices;
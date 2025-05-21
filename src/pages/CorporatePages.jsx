
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
               title ={`${toSentenceCase(serviceName)} 2025`}
               description ={`${toSentenceCase(serviceName)} 2025: Explore how to obtain ${toSentenceCase(serviceName)}: learn about the advantages, requirements and process. Contact us to find out more`}
            />
            <Header />
            <Breadcrumbs pageTitle={serviceName.replace(/_/g, ' ')}/>
            <CorporateContent handleSetName={setServiceName}/>
            <Footer />
        </>
    );
};

export default CorporateServices;
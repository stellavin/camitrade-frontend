import React, { useState } from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import ServiceList from '../components/ServiceList';
import CanonicalHeaders from '../components/CanonicalHeaders';
import Consultation from '../components/Consultation';

const OtherServices = () => {
    const [serviceName, setServiceName]=useState('Other Services');
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
               title ={`${toSentenceCase(serviceName)} | Professional Business Solutions`}
               description ={`Get expert guidance on ${toSentenceCase(serviceName)}. Fast, reliable service with 100% compliance. Start your application today and get professional support.`}
               schemaType="Service"
               serviceName={toSentenceCase(serviceName)}
               serviceDescription={`Expert ${toSentenceCase(serviceName)} guidance. Fast, reliable service with 100% compliance.`}
            />
            <Header />
            <Breadcrumbs pageTitle={toSentenceCase(serviceName)}/>
            <ServiceList handleSetName={setServiceName}/>
            <Consultation />
            <Footer />
        </>
    );
};

export default OtherServices;
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import ServiceFeature from '../components/ServiceFeature';
import Footer from '../components/Footer';
import FooterCTA from '../components/FooterCTA';
import CanonicalHeaders from '../components/CanonicalHeaders';
import Consultation from '../components/Consultation';

const Services = () => {
    const [name, setServiceName]=useState('Service');
    const [Newname, setName]=useState('Service');

    useEffect(()=> {
        if (name == 'other-services') {
            setName('Other Services');
        }
        if (name == 'corporate') {
            setName('Corporate Services');
        }

        if (name == 'licensing') {
            setName('Licensing Services');
        }
    },[name])
    
    return (
        <>
        <CanonicalHeaders
                title ={`${name}| We ensure legal compliance and sustainable growth.`}
                description ="Camitrade Fiduciaries provides global company incorporation and administration services, Licensing services and Payment solutions"
                schemaType="Service"
                serviceName={Newname}
                serviceDescription="Global company incorporation and administration services with legal compliance and sustainable growth"
            />
            <Header />
            <Breadcrumbs pageTitle={Newname} />
            <ServiceFeature setServiceName={setServiceName} />
            <FooterCTA />
            <Consultation />
            <Footer />
        </>
    );
};

export default Services;
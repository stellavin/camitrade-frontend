import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import ServiceFeature from '../components/ServiceFeature';
import Footer from '../components/Footer';
import CanonicalHeaders from '../components/CanonicalHeaders';

const Services = () => {
    const [name, setServiceName]=useState('Service');
    const [Newname, setName]=useState('Service');

    useEffect(()=> {
        if (name == 'Other_services') {
            setName('Other Services');
        }
        if (name == 'Corporate') {
            setName('Corporate Services');
        }

        if (name == 'Licensing') {
            setName('Licensing Services');
        }
    },[name])
    
    return (
        <>
        <CanonicalHeaders
                title ={`${name}| We ensure legal compliance and sustainable growth.`}
                description ="Camitrade Fiduciaries provides global company incorporation and administration services, Licensing services and Payment solutions"
            />
            <Header />
            <Breadcrumbs pageTitle={Newname} />
            <ServiceFeature setServiceName={setServiceName} />
            <Footer />
        </>
    );
};

export default Services;
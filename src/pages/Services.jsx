import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import ServiceFeature from '../components/ServiceFeature';
import Footer from '../components/Footer';

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
            <Header />
            <Breadcrumbs pageTitle={Newname} />
            <ServiceFeature setServiceName={setServiceName} />
            <Footer />
        </>
    );
};

export default Services;
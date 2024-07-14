import React from 'react';
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import Footer from '../components/Footer';
import CanonicalHeaders from '../components/CanonicalHeaders';

const ErrorPage = () => {
    return (
        <> 
        <CanonicalHeaders
        title ="Error Page | We ensure legal compliance and sustainable growth."
        description ="Camitrade Fiduciaries provides global company incorporation and administration services, Licensing services and Payment solutions"
    />
            <Header/>
            <NotFound/>
            <Footer/>
        </>
    );
};

export default ErrorPage;
import React from 'react';
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import Footer from '../components/Footer';
import CanonicalHeaders from '../components/CanonicalHeaders';

const ErrorPage = () => {
    return (
        <> 
        <CanonicalHeaders
        title ="Error Page | Page Not Found - Camitrade Fiduciaries"
        description ="The page you are looking for could not be found. Return to Camitrade Fiduciaries homepage for global company incorporation and administration services."
        schemaType="WebPage"
    />
            <Header/>
            <NotFound/>
            <Footer/>
        </>
    );
};

export default ErrorPage;
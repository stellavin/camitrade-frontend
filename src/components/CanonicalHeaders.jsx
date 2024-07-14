import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const CanonicalHeaders = ({title, description}) => {

    const location = useLocation();
    const canonicalUrl = `https://www.camitrade.com${location.pathname}`;

    return (
        <>
         <Helmet>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        </>
    );
};

export default CanonicalHeaders;
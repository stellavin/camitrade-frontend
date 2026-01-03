import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import SchemaMarkup from './SchemaMarkup';

const CanonicalHeaders = ({
    title, 
    description,
    schemaType = 'WebPage',
    image,
    datePublished,
    dateModified,
    author,
    serviceName,
    serviceDescription,
    price,
    priceCurrency,
    breadcrumbs,
    faqItems
}) => {

    const location = useLocation();
    let canonicalUrl = `https://www.camitrade.com${location.pathname}`;

    if(location.search) {
        canonicalUrl = `https://www.camitrade.com${location.pathname}${location.search}`;
    } 

    return (
        <>
         <Helmet>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <SchemaMarkup
            type={schemaType}
            title={title}
            description={description}
            image={image}
            datePublished={datePublished}
            dateModified={dateModified}
            author={author}
            serviceName={serviceName}
            serviceDescription={serviceDescription}
            price={price}
            priceCurrency={priceCurrency}
            breadcrumbs={breadcrumbs}
            faqItems={faqItems}
        />
        </>
    );
};

export default CanonicalHeaders;
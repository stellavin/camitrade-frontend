import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import SchemaMarkup from './SchemaMarkup';

const DEFAULT_OG_IMAGE = 'https://www.camitrade.com/img/logo/logo.png';

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

    const ogType = schemaType === 'Article' ? 'article' : 'website';
    const ogImage = image || DEFAULT_OG_IMAGE;

    return (
        <>
         <Helmet>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph */}
                <meta property="og:site_name" content="Camitrade Investment Fiduciaries" />
                <meta property="og:type" content={ogType} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content={ogImage} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:locale" content="en_US" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@CFiduciaries" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={ogImage} />
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
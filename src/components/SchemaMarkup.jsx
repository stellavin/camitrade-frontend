import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SchemaMarkup = ({ 
    type = 'WebPage', 
    title, 
    description, 
    image,
    datePublished,
    dateModified,
    author,
    serviceName,
    serviceDescription,
    price,
    priceCurrency = 'USD',
    breadcrumbs,
    faqItems = []
}) => {
    const location = useLocation();
    const baseUrl = 'https://www.camitrade.com';
    const currentUrl = `${baseUrl}${location.pathname}`;
    const logoUrl = `${baseUrl}/img/logo/logo.png`;

    // Base Organization schema (used on all pages)
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Camitrade Investment Fiduciaries",
        "alternateName": "Camitrade Fiduciaries",
        "url": baseUrl,
        "logo": {
            "@type": "ImageObject",
            "url": logoUrl
        },
        "description": "Trusted global fiduciary services provider offering comprehensive licensing, corporate services, and business solutions. Licensed by Financial Services Authority for Trust & Corporate Services.",
        "foundingDate": "2010",
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "info@camitrade.com",
                "telephone": "+248 2 668 292",
                "url": `${baseUrl}/contact`,
                "areaServed": "Worldwide",
                "availableLanguage": "English"
            },
            {
                "@type": "ContactPoint",
                "contactType": "Sales",
                "email": "sales@camitrade.com",
                "telephone": "+971 56 106 6155",
                "url": `${baseUrl}/contact`,
                "areaServed": "Worldwide",
                "availableLanguage": "English"
            }
        ],
        "address": [
            {
                "@type": "PostalAddress",
                "streetAddress": "West Park Towers, Mpesi Lane",
                "addressLocality": "Nairobi",
                "addressCountry": "KE",
                "addressRegion": "Nairobi"
            },
            {
                "@type": "PostalAddress",
                "streetAddress": "Providence",
                "addressLocality": "Mahe",
                "addressCountry": "SC"
            },
            {
                "@type": "PostalAddress",
                "streetAddress": "Business Bay",
                "addressLocality": "Dubai",
                "addressCountry": "AE"
            },
            {
                "@type": "PostalAddress",
                "streetAddress": "St. Vincent Bank Ltd. Building, James Street, Kingston",
                "addressLocality": "Kingston",
                "addressCountry": "VC"
            },
            {
                "@type": "PostalAddress",
                "streetAddress": "Suite 201, The Catalyst, 40 Silicon Ave",
                "addressLocality": "Ebene",
                "addressCountry": "MU"
            }
        ],
        "telephone": ["+248 2 668 292", "+971 56 106 6155", "+254 715 826 827", "+357 95 990 867"],
        "email": ["info@camitrade.com", "sales@camitrade.com"],
        "sameAs": []
    };

    // WebSite schema (only on homepage)
    const webSiteSchema = (location.pathname === '/') ? {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Camitrade Investment Fiduciaries",
        "url": baseUrl,
        "description": "Trusted global fiduciary services provider offering comprehensive licensing, corporate services, and business solutions.",
        "publisher": {
            "@type": "Organization",
            "name": "Camitrade Investment Fiduciaries",
            "url": baseUrl
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${baseUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    } : null;

    // Base WebPage schema
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "url": currentUrl,
        "name": title,
        "description": description,
        "inLanguage": "en-US",
        "isPartOf": {
            "@type": "WebSite",
            "name": "Camitrade Investment Fiduciaries",
            "url": baseUrl
        },
        "publisher": {
            "@type": "Organization",
            "name": "Camitrade Investment Fiduciaries",
            "url": baseUrl
        },
        "datePublished": datePublished || new Date().toISOString(),
        "dateModified": dateModified || new Date().toISOString()
    };

    // Service schema
    const serviceSchema = serviceName ? {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": serviceName,
        "description": serviceDescription || description,
        "provider": {
            "@type": "Organization",
            "name": "Camitrade Investment Fiduciaries",
            "url": baseUrl,
            "logo": {
                "@type": "ImageObject",
                "url": logoUrl
            }
        },
        "areaServed": {
            "@type": "Country",
            "name": "Worldwide"
        },
        "serviceType": serviceName,
        "category": "Financial Services",
        "audience": {
            "@type": "Audience",
            "audienceType": "Business"
        }
    } : null;

    // Article schema (for blog posts)
    const articleSchema = (type === 'Article' && title) ? {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": {
            "@type": "ImageObject",
            "url": image || logoUrl
        },
        "datePublished": datePublished || new Date().toISOString(),
        "dateModified": dateModified || new Date().toISOString(),
        "author": {
            "@type": author === "Camitrade Fiduciaries" || author === "Camitrade Investment Fiduciaries" ? "Organization" : "Person",
            "name": author || "Camitrade Investment Fiduciaries"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Camitrade Investment Fiduciaries",
            "logo": {
                "@type": "ImageObject",
                "url": logoUrl
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": currentUrl
        },
        "inLanguage": "en-US",
        "articleSection": "Business & Finance"
    } : null;

    // Blog schema
    const blogSchema = (type === 'Blog' && title) ? {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": title,
        "description": description,
        "url": currentUrl,
        "inLanguage": "en-US",
        "publisher": {
            "@type": "Organization",
            "name": "Camitrade Investment Fiduciaries",
            "logo": {
                "@type": "ImageObject",
                "url": logoUrl
            }
        },
        "blogPost": []
    } : null;

    // ContactPage schema
    const contactPageSchema = (type === 'ContactPage') ? {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": title,
        "description": description,
        "url": currentUrl,
        "mainEntity": {
            "@type": "Organization",
            "name": "Camitrade Investment Fiduciaries",
            "url": baseUrl,
            "contactPoint": [
                {
                    "@type": "ContactPoint",
                    "contactType": "Customer Service",
                    "email": "info@camitrade.com",
                    "telephone": "+248 2 668 292"
                },
                {
                    "@type": "ContactPoint",
                    "contactType": "Sales",
                    "email": "sales@camitrade.com",
                    "telephone": "+971 56 106 6155"
                }
            ]
        }
    } : null;

    // Offer schema
    const offerSchema = (type === 'Offer' && serviceName) ? {
        "@context": "https://schema.org",
        "@type": "Offer",
        "name": serviceName,
        "description": serviceDescription || description,
        "price": price,
        "priceCurrency": priceCurrency || "USD",
        "availability": "https://schema.org/InStock",
        "itemOffered": {
            "@type": "Service",
            "name": serviceName,
            "description": serviceDescription || description
        },
        "seller": {
            "@type": "Organization",
            "name": "Camitrade Investment Fiduciaries",
            "url": baseUrl
        },
        "eligibleRegion": {
            "@type": "Country",
            "name": "Worldwide"
        }
    } : null;

    // Auto-generate breadcrumbs if not provided but pathname suggests breadcrumbs exist
    const autoBreadcrumbs = !breadcrumbs && location.pathname !== '/' ? (() => {
        const pathSegments = location.pathname.split('/').filter(Boolean);
        const crumbs = [{ name: "Home", url: "/" }];
        
        let currentPath = '';
        pathSegments.forEach((segment, index) => {
            currentPath += `/${segment}`;
            const name = segment
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            crumbs.push({ name, url: currentPath });
        });
        
        return crumbs;
    })() : null;

    // BreadcrumbList schema
    const breadcrumbSchema = (breadcrumbs && breadcrumbs.length > 0) || (autoBreadcrumbs && autoBreadcrumbs.length > 0) ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": (breadcrumbs || autoBreadcrumbs).map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": `${baseUrl}${crumb.url}`
        }))
    } : null;

    // FAQPage schema
    const faqSchema = faqItems && faqItems.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : null;

    // Collect all schemas to include
    const schemas = [];
    
    // Always include Organization and WebPage
    schemas.push(organizationSchema);
    if (webSiteSchema) schemas.push(webSiteSchema);
    schemas.push(webPageSchema);

    // Add type-specific schemas
    if (serviceSchema) schemas.push(serviceSchema);
    if (articleSchema) schemas.push(articleSchema);
    if (blogSchema) schemas.push(blogSchema);
    if (contactPageSchema) schemas.push(contactPageSchema);
    if (offerSchema) schemas.push(offerSchema);
    if (breadcrumbSchema) schemas.push(breadcrumbSchema);
    if (faqSchema) schemas.push(faqSchema);

    return (
        <Helmet>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </Helmet>
    );
};

export default SchemaMarkup;


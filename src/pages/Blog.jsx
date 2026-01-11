import React from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import BlogContent from '../components/BlogContent';
import Footer from '../components/Footer';
import CanonicalHeaders from '../components/CanonicalHeaders';

const Blog = () => {
    return (
        <>
            <CanonicalHeaders
                title="Blog | Camitrade Fiduciaries - News & Insights"
                description="Stay updated with the latest news, insights, and articles from Camitrade Fiduciaries. Expert articles on global business solutions, licensing services, and corporate services."
                schemaType="Blog"
            />
            <Header />
            <Breadcrumbs pageTitle={"Blog Classic"} />
            <BlogContent />
            <Footer />
        </>
    );
};

export default Blog;
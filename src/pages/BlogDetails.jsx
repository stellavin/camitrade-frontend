import React from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import BlogDetailsContent from '../components/BlogDetailsContent';
import Footer from '../components/Footer';
import CanonicalHeaders from '../components/CanonicalHeaders';

const BlogDetails = () => {
    return (
        <>
            <CanonicalHeaders
                title="Blog Details | Camitrade Fiduciaries - Latest News & Insights"
                description="Read the latest news, insights, and updates from Camitrade Fiduciaries. Stay informed about global business solutions, licensing services, and corporate services."
                schemaType="Article"
                author="Camitrade Fiduciaries"
                image="https://www.camitrade.com/img/blog/blogdetails1.jpg"
            />
            <Header />
            <Breadcrumbs pageTitle={"Blog Details"} />
            <BlogDetailsContent />
            <Footer />
        </>
    );
};

export default BlogDetails;
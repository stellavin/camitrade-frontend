import React from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import BlogGridPost from '../components/BlogGridPost';
import Footer from '../components/Footer';
import CanonicalHeaders from '../components/CanonicalHeaders';

const BlogGrid = () => {
    return (
        <>
            <CanonicalHeaders
                title="Blog Grid | Camitrade Fiduciaries - Latest Articles"
                description="Browse our blog articles in grid view. Stay informed about global business solutions, licensing services, and corporate services from Camitrade Fiduciaries."
                schemaType="Blog"
            />
            <Header />
            <Breadcrumbs pageTitle={"Blog Grid"} />
            <BlogGridPost />
            <Footer />
        </>
    );
};

export default BlogGrid;
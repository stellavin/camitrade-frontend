import React from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import BlogDetailsContent from '../components/BlogDetailsContent';
import Footer from '../components/Footer';

const BlogDetails = () => {
    return (
        <>
            <Header />
            <Breadcrumbs pageTitle={"Blog Details"} />
            <BlogDetailsContent />
            <Footer />
        </>
    );
};

export default BlogDetails;
import React from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import BlogContent from '../components/BlogContent';
import Footer from '../components/Footer';

const Blog = () => {
    return (
        <>
            <Header />
            <Breadcrumbs pageTitle={"Blog Classic"} />
            <BlogContent />
            <Footer />
        </>
    );
};

export default Blog;
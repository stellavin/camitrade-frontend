import React from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import BlogGridPost from '../components/BlogGridPost';
import Footer from '../components/Footer';

const BlogGrid = () => {
    return (
        <>
            <Header />
            <Breadcrumbs pageTitle={"Blog Grid"} />
            <BlogGridPost />
            <Footer />
        </>
    );
};

export default BlogGrid;
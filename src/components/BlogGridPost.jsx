import React from 'react';
import BlogGridData from '../jsonData/BlogData.json'
import SingleBlogGridPost from './SingleBlogGridPost';
import Pagination from './Pagination';

const BlogGridPost = () => {
    return (
        <>
            <section className="blog-sec te-pt-100 te-pb-80 te-md-pt-70 te-md-pb-60 te-sm-pt-50 te-sm-pb-40">
                <div className="container">
                    <div className="row">
                        {BlogGridData.map(BlogData =>
                            <SingleBlogGridPost BlogData={BlogData} key={BlogData.id} />
                        )}
                    </div>
                    <div className="row">
                        <Pagination />
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogGridPost;
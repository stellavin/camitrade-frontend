import React from 'react';
import BlogData from '../jsonData/BlogData.json'
import SingleBlog from './SingleBlog';

const BlogPost = () => {
    return (
        <>
            <section className="blog-sec te-pt-100 te-pb-65 te-md-pt-70 te-md-pb-50 te-sm-pt-40 te-sm-pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 text-center">
                            <div className="sec-title">
                                <h1>our news and tips</h1>
                                <p>Our latest blog client feedback your request global management consulting firm that serves a private</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {BlogData.slice(0, 3).map(blog =>
                            <SingleBlog key={blog.id} blog={blog} />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogPost;
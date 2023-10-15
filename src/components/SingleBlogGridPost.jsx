import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleBlogGridPost = ({ BlogData }) => {
    let { image, author, date, title, text } = BlogData;
    return (
        <>
            <div className="col-lg-4 col-md-6">
                <div className="media">
                    <div className="single-post">
                        <div className="single-post-thumb">
                            <img src={`/img/blog/${image}`} alt="blogImage" />
                        </div>
                        <div className="post-info">
                            <div className="post-meta">
                                <ul>
                                    <li className="post-author"><span>by</span><Link to="#">{author}</Link></li>
                                    <li><Link to="#">{date}</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="single-post-text">
                            <h2><Link to="/blog-details#">{title}</Link></h2>
                            <p>{text}</p>
                            <Link to="/blog-details#" className="blog-readmore link-hover">continue reading ...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlogGridPost;
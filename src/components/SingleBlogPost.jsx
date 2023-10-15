import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleBlogPost = ({ BlogContent }) => {
    let { image, author, date, title, text } = BlogContent;

    return (
        <>
            <div className="single-post">
                <div className="single-post-thumb">
                    <img src={`/img/blog/${image}`} alt="blogPost" />
                </div>
                <div className="post-info">
                    <div className="post-meta">
                        <ul>
                            <li className="post-author"><span>by</span><Link to="#">{author},</Link></li>
                            <li><Link to="#">{date}</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="single-post-text">
                    <h2><Link to="/blog-details#">{title}</Link></h2>
                    <p>{text} </p>
                    <Link to="/blog-details#" className="blog-readmore link-hover">continue reading ...</Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlogPost;
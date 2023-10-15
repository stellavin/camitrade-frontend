import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleBlog = ({ blog }) => {
    let { image, date, title, text, delay } = blog
    return (
        <>
            <Fade delay={delay} right>
                <div className="col-lg-4 col-md-6">
                    <div className="media">
                        <div className="single-post">
                            <div className="single-post-thumb">
                                <img src={`/img/blog/${image}`} alt="blogImage" />
                            </div>
                            <div className="post-info">
                                <div className="post-meta">
                                    <ul>
                                        <li><Link to="/blog-details#">{date}</Link></li>
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
            </Fade>
        </>
    );
};

export default SingleBlog;
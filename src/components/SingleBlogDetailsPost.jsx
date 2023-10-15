import React from 'react';
import SocialShare from './SocialShare';
import BlogComment from './BlogComment';
import { HashLink as Link } from 'react-router-hash-link';
import BlogDetails1 from '/img/blog/blogdetails1.jpg'
import BlogDetails5 from '/img/blog/blogDetails5.jpg'
import BlogDetails6 from '/img/blog/blogDetails6.jpg'

const SingleBlogDetailsPost = () => {
    return (
        <>
            <div className="single-post">
                <div className="single-post-thumb">
                    <img src={BlogDetails1} alt="BlogDetails1" />
                </div>
                <div className="post-info">
                    <div className="post-meta">
                        <ul>
                            <li className="post-author"><span>by</span><Link to="#">Pierce Blick</Link></li>
                            <li><Link to="#">14 february 2023</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="single-post-text">
                    <h2><Link to="#">For One Athens Arts Groupthe</Link></h2>
                    <p>Odio a quis, non pretium, dui aenean ac cras, lacinia feugiat elit tortor ligula et, odio nulla magna pellentesque velit. Et congue, leo lacus aptent semper in a, id quisque facilisi elit, ut vulputate donec amet. Volutpat sodales proin id eget, placeat adipisci, eros magna wisi pretium dui, arcu mollis, non velit consectetuer velit fermentum. Mauris wisi dui aliquam vel fermentum blandit, elementum wisi. Vitae mollis </p>
                    <div className="code-text">
                        <p>The most common way people give up Our power is by thinking we don’t have any. </p>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="column-img">
                                <img src={BlogDetails5} alt="BlogDetails" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="column-img">
                                <img src={BlogDetails6} alt="BlogDetails" />
                            </div>
                        </div>
                    </div>
                    <p>Massa neque amet integer velit at, enim lacus vitae diam. Diam posuere ut vehicula nec in massa. Quis nisl proin eros porta urna, sociis ipsum, wisi nec duis vivamus at, ultrices magna semper arcu eu lectus, ac justo purus nunc vehicula nec. Arcu amet diam </p>
                </div>
                <div className="row">
                    <div className="col-sm-7">
                        <div className="post-tag">
                            <ul>
                                <li><Link to="#">business </Link></li>
                                <li><Link to="#">creative </Link></li>
                                <li><Link to="#">agency </Link></li>
                                <li><Link to="#">marketing </Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="post-share-link">
                            <span>share</span>
                            <SocialShare />
                        </div>
                    </div>
                </div>
                <BlogComment />
            </div>
        </>
    );
};

export default SingleBlogDetailsPost;
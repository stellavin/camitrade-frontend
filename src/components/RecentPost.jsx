import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const RecentPost = ({ BlogContent }) => {
    let { postTitle, author, date } = BlogContent;
    
    return (
        <>
            <div className="relative-post">
                <div className="media-body">
                    <div className="single-recent-title">
                        <h3><Link to="#">{postTitle}</Link></h3>
                        <ul>
                            <li><Link to="#">{author}</Link></li>
                            <li><Link to="#">{date}</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecentPost;
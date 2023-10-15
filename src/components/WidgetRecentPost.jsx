import React from 'react';
import BlogContentData from '../jsonData/BlogContent.json'
import RecentPost from './RecentPost';

const WidgetRecentPost = () => {
    return (
        <>
            <div className="widget-recent-post">
                <h1 className="sidebar-widget-title">recent post</h1>
                <div className="all-recent-post">
                    {BlogContentData.slice(0, 3).map(BlogContent =>
                        <RecentPost BlogContent={BlogContent} key={BlogContent.id} />
                    )}
                </div>
            </div>
        </>
    );
};

export default WidgetRecentPost;
import React from 'react';
import BlogContentData from '../jsonData/BlogContent.json'
import SingleBlogPost from './SingleBlogPost';
import WidgetSearch from './WidgetSearch';
import WidgetRecentPost from './WidgetRecentPost';
import WidgetArchive from './WidgetArchive';
import WidgetCategory from './WidgetCategory';
import WidgetNewsLetter from './WidgetNewsLetter';
import WidgetTags from './WidgetTags';

const BlogContent = () => {
    return (
        <>
            <section className="blog-page-sec te-pt-100 te-pb-50 te-md-pt-70 te-md-pb-20 te-sm-pt-50 te-sm-pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {BlogContentData.map(BlogContent =>
                                <SingleBlogPost key={BlogContent.id} BlogContent={BlogContent} />
                            )}
                        </div>
                        <div className="col-lg-4">
                            <WidgetSearch />
                            <WidgetRecentPost />
                            <WidgetArchive />
                            <WidgetCategory />
                            <WidgetNewsLetter />
                            <WidgetTags />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogContent;
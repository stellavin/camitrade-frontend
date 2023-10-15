import React from 'react';
import WidgetSearch from './WidgetSearch';
import WidgetRecentPost from './WidgetRecentPost';
import WidgetCategory from './WidgetCategory';
import WidgetArchive from './WidgetArchive';
import WidgetTags from './WidgetTags';
import WidgetNewsLetter from './WidgetNewsLetter';
import SingleBlogDetailsPost from './SingleBlogDetailsPost';

const BlogDetailsContent = () => {
    return (
        <>
            <section className="blog-sec te-pt-100 te-pb-20 te-md-pt-70 te-sm-pt-60 ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <SingleBlogDetailsPost />
                        </div>
                        <div className="col-lg-4">
                            <WidgetSearch />
                            <WidgetRecentPost />
                            <WidgetCategory />
                            <WidgetArchive />
                            <WidgetNewsLetter />
                            <WidgetTags />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDetailsContent;
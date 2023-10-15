import React from 'react';
import ProjectDetailsInfo from './ProjectDetailsInfo';
import WidgetSearch from './WidgetSearch';
import WidgetCategory from './WidgetCategory';
import WidgetArchive from './WidgetArchive';
import WidgetNewsLetter from './WidgetNewsLetter';

const ProjectDetailsContent = () => {
    return (
        <>
            <section className="page-details-sec te-pt-100 te-pb-85 te-md-pt-70 te-md-pb-55 te-sm-pt-50 te-sm-pb-35">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <ProjectDetailsInfo />
                        </div>
                        <div className="col-lg-4">
                            <WidgetSearch />
                            <WidgetCategory />
                            <WidgetArchive />
                            <WidgetNewsLetter />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectDetailsContent;
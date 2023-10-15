import React from 'react';
import ProjectData from '../jsonData/ProjectsData.json';
import SingleServiceH3 from './SingleServiceH3';

const HomeThreeService = () => {
    return (
        <>
            <section className="service-v3-sec te-pt-100 te-pb-70 te-md-pt-70 te-md-pb-40 te-sm-pt-40 te-sm-pb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="sec-title">
                                <h1>Our Service Plan</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {ProjectData.map(project =>
                            <SingleServiceH3 project={project} key={project.id} />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeThreeService;
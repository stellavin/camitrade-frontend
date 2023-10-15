import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleProjects = ({ project }) => {
    let { image, projectTitle, delay } = project;

    return (
        <>
            <Fade delay={delay} right>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-service-tips">
                        <img src={`/img/projects/${image}`} alt="project" />
                        <div className="service-tips-overlay">
                            <span className="service-tips-link">
                                <Link to="/project-details#"><i className="icofont-link-alt"></i></Link>
                            </span>
                            <h2 className="service-tips-title">
                                <Link to="/project-details#">{projectTitle}</Link>
                            </h2>
                            <span className="service-tips-expand">
                                <Link to="/project-details#"><i className="icofont-expand"></i></Link>
                            </span>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleProjects;
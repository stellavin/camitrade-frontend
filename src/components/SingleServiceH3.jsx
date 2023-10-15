import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleServiceH3 = ({ project }) => {
    let { image, projectTitle, projectMeta, delay } = project;

    return (
        <>
            <Fade left delay={delay}>
                <div className="col-lg-4 col-md-6">
                    <div className="service-v3-item">
                        <div className="service-v3-img">
                            <Link to="/service-details#"><img src={`/img/projects/${image}`} alt="projectImage" /></Link>
                        </div>
                        <div className="service-v3-content">
                            <div className="media">
                                <div className="media-body">
                                    <div className="service-v3-text">
                                        <h2><Link to="/service-details#">{projectTitle}</Link></h2>
                                        <p>{projectMeta}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleServiceH3;
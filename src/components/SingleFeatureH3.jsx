import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleFeatureH3 = ({ feature }) => {
    let { featureThumb, featureIcon, title, titleMeta, text, delay } = feature;

    return (
        <>
            <Fade right delay={delay}>
                <div className="col-lg-4 col-md-4 d-lg-flex d-md-flex feature-v3-inner">
                    <div className="feature-v3-service-inner">
                        <div className="feature-v3-service-thumb">
                            <img src={`/img/feature/${featureThumb}`} alt="featureThumb" />
                            <div className="feature-v3-title-inner">
                                <div className="media">
                                    <div className="media-left">
                                        <div className="feature-v3-service-icon">
                                            <img src={`/img/feature/${featureIcon}`} alt="featureIcon" />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div className="feature-v3-service-title">
                                            <h2><Link to="#">{title}</Link></h2>
                                            <span>{titleMeta}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="feature-v3-content">
                            <p>{text}</p>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleFeatureH3;
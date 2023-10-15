import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleFeatureTwo = ({ feature }) => {
    let { feature2Thumb, featureIcon, title, text, delay } = feature;

    return (
        <>
            <Fade right delay={delay}>
                <div className="col-lg-4 col-md-6 d-lg-flex d-md-flex">
                    <div className="why-choose-inner">
                        <div className="why-choose-thumb">
                            <Link to="#"><img src={`/img/feature/${feature2Thumb}`} alt="feature2Thumb" /></Link>
                            <div className="why-choose-icon">
                                <img src={`/img/feature/${featureIcon}`} alt="featureIcon" />
                            </div>
                        </div>
                        <div className="why-choose-text">
                            <h2><Link to="/service-details#">{title}</Link></h2>
                            <p>{text}</p>
                            <Link to="/service-details#" className="readmore link-hover">Read More</Link>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleFeatureTwo;
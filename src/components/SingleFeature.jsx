import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleFeature = ({ feature }) => {
    let { featureThumb, href, title, titleMeta, text, delay } = feature;

    return (
        <>
            <Fade left delay={delay}>
                <div className="col-lg-4 col-md-6 d-lg-flex d-md-flex">
                    <div className="feature-item">
                        <div className="feature-thumb">
                            <Link to="feature-details">
                                <img src={`/img/feature/${featureThumb}`} alt="feature1" />
                            </Link>
                        </div>
                        <div className="feature-inner-text">
                            {/* <div className="feature_icon">
                                <img src={`/img/feature/${featureIcon}`} alt="featureIcon" />
                            </div> */}
                            <div className="media-body">
                                <div className="feature-inner-meta">
                                    <h2><Link to={`${href}`}>{title}</Link></h2>
                                    <span>{titleMeta}</span>
                                </div>
                            </div>
                            <div className="feature-content">
                                <p className="feature-text-me">{text}</p>
                                <div className="feature-readmore-btn">
                                    <Link to={`${href}`} className='theme-btn theme-btn-2'>Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleFeature;
import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleFeature = ({ feature, inCarousel }) => {
    let { featureThumb, feature2Thumb, href, title, titleMeta, text, delay } = feature;
    const imageSrc = featureThumb || feature2Thumb;

    const featureContent = (
        <div className="feature-item">
            <div className="feature-thumb">
                <Link to="feature-details">
                    <img src={`/img/feature/${imageSrc}`} alt={title} />
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
                        <Link to={`${href}`} className='theme-btn theme-btn-2'>Talk to an Expert</Link>
                    </div>
                </div>
            </div>
        </div>
    );

    if (inCarousel) {
        return (
            <>
                <div className="feature-carousel-item">
                    {featureContent}
                </div>
            </>
        );
    }

    return (
        <>
            <Fade left delay={delay}>
                <div className="col-lg-4 col-md-6 d-lg-flex d-md-flex">
                    {featureContent}
                </div>
            </Fade>
        </>
    );
};

export default SingleFeature;
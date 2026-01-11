import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

const SingleFeature = ({ feature, inCarousel }) => {
    let { featureThumb, feature2Thumb, featureIcon, title, titleMeta, text, delay } = feature;
    const imageSrc = featureThumb || feature2Thumb;

    const featureContent = (
        <div className="feature-card-modern">
            {imageSrc && (
                <div className="feature-image-modern">
                    <img src={`/img/feature/${imageSrc}`} alt={title} />
                    <div className="feature-image-overlay"></div>
                </div>
            )}
            <div className="feature-content-modern">
                {featureIcon && (
                    <div className="feature-icon-modern">
                        <img src={`/img/feature/${featureIcon}`} alt={title} />
                    </div>
                )}
                <div className="feature-header-modern">
                    <h3 className="feature-title-modern">{title}</h3>
                    {titleMeta && (
                        <span className="feature-meta-modern">{titleMeta}</span>
                    )}
                </div>
                <p className="feature-text-modern">{text}</p>
                <Link to="/services/corporate" className="feature-cta-modern">
                    Explore Services
                    <span className="feature-cta-arrow">
                        <i className="icofont-arrow-right"></i>
                    </span>
                </Link>
            </div>
        </div>
    );

    if (inCarousel) {
        return (
            <>
                <div className="feature-carousel-item-modern">
                    {featureContent}
                </div>
            </>
        );
    }

    return (
        <>
            <Fade bottom delay={delay || 200}>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    {featureContent}
                </div>
            </Fade>
        </>
    );
};

export default SingleFeature;
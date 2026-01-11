import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

const ConversationalCTA = ({ 
    heading = "Ready to take your business to the next level?",
    message = "Let's have a conversation about how we can help you achieve your goals. Our team is here to guide you every step of the way.",
    primaryButtonText = "Let's Talk",
    primaryButtonLink = "/contact",
    secondaryButtonText = "Explore Our Services",
    secondaryButtonLink = "/services/corporate",
    variant = "default" // "default" or "about"
}) => {
    return (
        <>
            <div className="call-to-action-modern" style={{ position: 'relative', zIndex: 1 }}>
                <div className="cta-pattern-overlay"></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12">
                            <Fade left delay={300}>
                                <div className="cta-content-modern">
                                    <h2 className="cta-heading-modern">{heading}</h2>
                                    <p className="cta-message-modern">{message}</p>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <Fade right delay={500}>
                                <div className="cta-buttons-modern">
                                    {primaryButtonText && primaryButtonLink && (
                                        <Link to={primaryButtonLink} className="cta-btn-primary">
                                            {primaryButtonText}
                                        </Link>
                                    )}
                                    {secondaryButtonText && secondaryButtonLink && (
                                        <Link to={secondaryButtonLink} className="cta-btn-secondary">
                                            {secondaryButtonText}
                                        </Link>
                                    )}
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConversationalCTA;


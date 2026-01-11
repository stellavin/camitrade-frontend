import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

const OurStory = () => {
    return (
        <>
            <section className="our-story-sec te-pt-100 te-pb-100 te-md-pt-70 te-md-pb-70 te-sm-pt-50 te-sm-pb-50">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 order-md-1 order-lg-1">
                            <Fade left delay={200}>
                                <div className="story-image">
                                    <div className="story-image-wrapper">
                                        <img 
                                            src="/img/slider/slider-20.png" 
                                            alt="Camitrade Story" 
                                            className="img-fluid story-img"
                                        />
                                        <div className="story-image-overlay"></div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6 col-md-12 order-md-2 order-lg-2">
                            <Fade right delay={300}>
                                <div className="story-content">
                                    <div className="sec-title">
                                        <span className="section-label">Our Foundation</span>
                                        <h1>Our Story</h1>
                                        <div className="title-underline"></div>
                                    </div>
                                    <div className="story-text-content">
                                        <p className="story-text-primary">
                                            Camitrade Investment Fiduciaries was founded to solve a fundamental problem in global business advisory: the fragmentation of expertise across jurisdictions, regulatory frameworks, and service providers.
                                        </p>
                                        <p className="story-text-secondary">
                                            In an increasingly interconnected world, businesses seeking to expand across borders face a complex web of regulatory requirements, <Link to="/licensing-services">licensing obligations</Link>, and compliance frameworks. Too often, they encounter advisors who excel in one jurisdiction but lack the cross-border perspective needed for sustainable global operations. Others offer quick-fix solutions that prioritize speed over regulatory soundness, leaving businesses exposed to compliance risks that can derail operations years later.
                                        </p>
                                        <p className="story-text-secondary">
                                            We recognized that the traditional model of fragmented advisory services was failing businesses in regulated industries—particularly in finance, fintech, crypto, insurance, and payments. These sectors require advisors who understand not just the mechanics of <Link to="/corporate-services">company formation</Link>, but the regulatory philosophy behind each <Link to="/jurisdictions">jurisdiction</Link>, the long-term implications of structural decisions, and the evolving compliance landscape.
                                        </p>
                                        <p className="story-text-secondary">
                                            Camitrade Investment Fiduciaries was built on the principle that regulatory compliance is not a one-time transaction, but a foundational element of sustainable business growth. We set out to provide advisory services that combine deep jurisdictional knowledge with a global perspective, ensuring that every structural decision serves both immediate business objectives and long-term regulatory compliance.
                                        </p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurStory;


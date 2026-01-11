import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

const ExperiencePerspective = () => {
    return (
        <>
            <section className="experience-perspective-sec te-pt-100 te-pb-100 te-md-pt-70 te-md-pb-70 te-sm-pt-50 te-sm-pb-50">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 order-lg-2">
                            <Fade right delay={200}>
                                <div className="experience-content">
                                    <div className="sec-title">
                                        <h1>Experience & Perspective</h1>
                                        <div className="title-underline"></div>
                                    </div>
                                    <div className="experience-text">
                                        <p className="experience-text-primary">
                                            The depth of our regulatory and cross-border experience comes from years of working across multiple <Link to="/jurisdictions">jurisdictions</Link>, regulatory frameworks, and industry sectors.
                                        </p>
                                        <p className="experience-text-secondary">
                                            Our team has navigated the regulatory landscapes of Africa, Europe, the Middle East, and offshore jurisdictions. We have seen how different regulators interpret similar regulations, how enforcement priorities shift over time, and how regulatory frameworks evolve in response to market developments.
                                        </p>
                                        <p className="experience-text-secondary">
                                            This exposure gives us the ability to anticipate regulatory issues before they arise. We recognize patterns that signal potential compliance challenges. We understand which <Link to="/jurisdictions">jurisdictions are tightening enforcement</Link>, which are opening new opportunities, and which require particular care in <Link to="/corporate-services">structuring</Link> and <Link to="/licensing-services">licensing</Link>.
                                        </p>
                                        <p className="experience-text-secondary">
                                            More importantly, we understand the human element of regulatory compliance: how to communicate with regulators, how to present structures in ways that demonstrate regulatory alignment, and how to build relationships that facilitate ongoing compliance rather than adversarial enforcement.
                                        </p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6 col-md-12 order-lg-1">
                            <Fade left delay={400}>
                                <div className="experience-image">
                                    <div className="experience-image-wrapper">
                                        <img 
                                            src="/img/slider/slider-c2.png" 
                                            alt="Global Regulatory Experience" 
                                            className="img-fluid experience-img"
                                        />
                                        <div className="experience-image-overlay"></div>
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

export default ExperiencePerspective;


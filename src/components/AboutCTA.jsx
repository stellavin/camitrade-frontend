import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

const AboutCTA = () => {
    return (
        <>
            <section className="about-cta-sec te-pt-100 te-pb-100 te-md-pt-70 te-md-pb-70 te-sm-pt-50 te-sm-pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <Fade bottom delay={200}>
                                <div className="about-cta-content">
                                    <div className="sec-title">
                                        <h1>Speak to a Camitrade Advisor</h1>
                                        <div className="title-underline-center"></div>
                                    </div>
                                    <p className="about-cta-message">
                                        Whether you're planning a new venture, expanding globally, or navigating regulatory changes, our advisors are here to help you build structures that are compliant, sustainable, and aligned with your business objectives.
                                    </p>
                                    <div className="about-cta-buttons">
                                        <Fade bottom delay={300}>
                                            <Link to="/contact" className="about-cta-btn-primary">
                                                Book a Free Consultation
                                            </Link>
                                        </Fade>
                                        <Fade bottom delay={400}>
                                            <Link to="/contact" className="about-cta-btn-secondary">
                                                Speak to a Global Advisor
                                            </Link>
                                        </Fade>
                                    </div>
                                    <Fade bottom delay={500}>
                                        <p className="about-cta-microcopy">
                                            Confidential • No obligation • Compliance-focused
                                        </p>
                                    </Fade>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutCTA;


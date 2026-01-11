import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

const WhyWeExist = () => {
    return (
        <>
            <section className="why-we-exist-sec te-pt-100 te-pb-100 te-md-pt-70 te-md-pb-70 te-sm-pt-50 te-sm-pb-50">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                            <Fade left delay={200}>
                                <div className="why-exist-content">
                                    <div className="sec-title">
                                        <h1>Why We Exist</h1>
                                        <div className="title-underline"></div>
                                    </div>
                                    <div className="why-exist-text">
                                        <p className="why-exist-text-primary">
                                            The cost of getting <Link to="/licensing-services">licensing</Link>, structuring, and compliance wrong in regulated industries is not just financial—it can mean regulatory sanctions, operational shutdowns, reputational damage, and years of corrective work.
                                        </p>
                                        <p className="why-exist-text-secondary">
                                            In finance, fintech, crypto, insurance, and payments, regulatory missteps compound over time. A structure that seems efficient today may create compliance gaps as regulations evolve. A <Link to="/licensing-services">license obtained without proper understanding</Link> of ongoing obligations can lead to enforcement actions. A <Link to="/jurisdictions">jurisdiction chosen for tax benefits alone</Link> may lack the regulatory infrastructure your business needs to scale.
                                        </p>
                                        <p className="why-exist-text-secondary">
                                            Camitrade Investment Fiduciaries exists because we believe in a different approach: compliance-first advisory that prioritizes regulatory soundness from day one. We believe that sustainable growth in regulated industries comes from <Link to="/corporate-services">structures and licenses</Link> that are not just legally valid, but regulator-approved and future-proof.
                                        </p>
                                        <p className="why-exist-text-secondary">
                                            Our clients choose us because they understand that in regulated industries, the fastest path to market is not always the best path. We help them build foundations that regulators trust, investors respect, and that can scale without regulatory friction.
                                        </p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <Fade right delay={400}>
                                <div className="why-exist-image">
                                    <div className="why-exist-image-wrapper">
                                        <img 
                                            src="/img/slider/slider-15.png" 
                                            alt="Regulatory Compliance" 
                                            className="img-fluid why-exist-img"
                                        />
                                        <div className="why-exist-image-overlay"></div>
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

export default WhyWeExist;


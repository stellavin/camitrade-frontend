import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

const FooterCTA = () => {
    return (
        <>
            <section className="footer-cta-modern">
                <div className="footer-cta-overlay"></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12">
                            <Fade left delay={200}>
                                <div className="footer-cta-content">
                                    <h1 className="footer-cta-heading">
                                        Let's Build Your Global Business — The Right Way
                                    </h1>
                                    <p className="footer-cta-message">
                                        From <Link to="/corporate-services" style={{color: '#9AC000', textDecoration: 'underline'}}>company formation</Link> to <Link to="/licensing-services" style={{color: '#9AC000', textDecoration: 'underline'}}>licensing</Link> and <Link to="/payments" style={{color: '#9AC000', textDecoration: 'underline'}}>banking</Link>, we handle it all.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <Fade right delay={400}>
                                <div className="footer-cta-buttons">
                                    <Link to="/contact" className="footer-cta-btn-primary">
                                        Book a Free Consultation
                                    </Link>
                                    <Link to="/contact" className="footer-cta-btn-secondary">
                                        Contact Our Experts
                                    </Link>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FooterCTA;


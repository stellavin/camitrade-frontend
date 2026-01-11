import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import { getWhatsAppUrl } from '../utils/urlTransform';

const WhoIsCamitrade = () => {
    return (
        <>
            <section className="who-is-camitrade-sec te-pt-100 te-pb-100 te-md-pt-70 te-md-pb-70 te-sm-pt-50 te-sm-pb-50">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                            <Fade left delay={200}>
                                <div className="who-is-camitrade-content">
                                    <div className="sec-title">
                                        <h1>Who is Camitrade</h1>
                                        <div className="title-underline-camitrade"></div>
                                    </div>
                                    <div className="who-is-camitrade-text">
                                        <p className="who-is-text-primary">
                                            <Link to="/about">Camitrade Investment Fiduciaries</Link> is a leading global fiduciary and <Link to="/licensing-services">licensing services</Link> provider, specializing in helping businesses incorporate, license, and operate across multiple <Link to="/jurisdictions">jurisdictions worldwide</Link>.
                                        </p>
                                        <p className="who-is-text-secondary">
                                            With expertise spanning over 10+ jurisdictions across Africa, Europe, the Middle East, and offshore locations, we provide comprehensive <Link to="/corporate-services">company formation services</Link>, <Link to="/licensing-services">financial services licensing</Link>, and <Link to="/payments">banking and payment solutions</Link> for fintech founders, fund managers, and international entrepreneurs seeking compliant and efficient global expansion.
                                        </p>
                                        <p className="who-is-text-secondary">
                                            Our team combines deep regulatory knowledge with practical business acumen, ensuring that every client receives tailored guidance for <Link to="/corporate-services">company formation</Link>, <Link to="/licensing-services">licensing services</Link>, <Link to="/payments">banking solutions</Link>, and ongoing compliance support.
                                        </p>
                                    </div>
                                    <Fade bottom delay={600}>
                                        <div className="who-is-camitrade-cta">
                                            <p className="who-is-cta-question">
                                                Ready to expand your business globally with confidence?
                                            </p>
                                            <p className="who-is-cta-message">
                                                Let's discuss how we can help you navigate the complexities of international business formation and compliance.
                                            </p>
                                            <div className="who-is-cta-buttons">
                                                <a href={getWhatsAppUrl('Hello! I would like to book a free consultation to discuss global business expansion.')} target="_blank" rel="noopener noreferrer" className="who-is-cta-btn-primary">
                                                    Book a Free Consultation
                                                </a>
                                                <Link to="/services/corporate" className="who-is-cta-btn-secondary">
                                                    Explore Our Services
                                                </Link>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <Fade right delay={400}>
                                <div className="who-is-camitrade-image">
                                    <div className="who-is-image-wrapper">
                                        <img 
                                            src="/img/about/1.png" 
                                            alt="Camitrade Team" 
                                            className="img-fluid who-is-img"
                                        />
                                        <div className="who-is-image-overlay"></div>
                                    </div>
                                    
                                    {/* Stat Card - Top Right */}
                                    <Fade top delay={700}>
                                        <div className="who-is-stat-card stat-card-top-right">
                                            <div className="stat-card-icon">
                                                <i className="icofont-globe-alt"></i>
                                            </div>
                                            <div className="stat-card-content">
                                                <div className="stat-card-number">10+</div>
                                                <div className="stat-card-label">Jurisdictions</div>
                                            </div>
                                            <div className="stat-card-shine"></div>
                                        </div>
                                    </Fade>
                                    
                                    {/* Stat Card - Bottom Left */}
                                    <Fade bottom delay={800}>
                                        <div className="who-is-stat-card stat-card-bottom-left">
                                            <div className="stat-card-icon">
                                                <i className="icofont-users-alt-5"></i>
                                            </div>
                                            <div className="stat-card-content">
                                                <div className="stat-card-number">500+</div>
                                                <div className="stat-card-label">Global Clients</div>
                                            </div>
                                            <div className="stat-card-shine"></div>
                                        </div>
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

export default WhoIsCamitrade;


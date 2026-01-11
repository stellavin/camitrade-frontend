import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

const OurCommitment = () => {
    const commitments = [
        {
            icon: 'icofont-lock',
            title: 'Client Confidentiality',
            description: 'We understand that your business plans, regulatory strategies, and structural decisions are sensitive. We maintain strict confidentiality protocols and treat all client information with the highest level of discretion.'
        },
        {
            icon: 'icofont-shield',
            title: 'Regulatory Best Interest',
            description: 'We act in your regulatory best interest, not just your immediate convenience. This means we will recommend structures and approaches that prioritize long-term compliance over short-term expediency, even when it requires more time or effort upfront.'
        },
        {
            icon: 'icofont-handshake-deal',
            title: 'Long-Term Advisory',
            description: 'We view our relationship with clients as a long-term partnership, not a series of one-off transactions. We provide ongoing support, monitor regulatory changes that affect your structures, and help you adapt as your business and the regulatory landscape evolve.'
        }
    ];

    return (
        <>
            <section className="our-commitment-sec te-pt-100 te-pb-100 te-md-pt-70 te-md-pb-70 te-sm-pt-50 te-sm-pb-50">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                            <Fade left delay={200}>
                                <div className="commitment-content">
                                    <div className="sec-title">
                                        <span className="section-label">Our Promise</span>
                                        <h1>Our Commitment</h1>
                                        <div className="title-underline"></div>
                                    </div>
                                    <p className="commitment-text-primary">
                                        Camitrade Investment Fiduciaries operates with unwavering commitment to client confidentiality, regulatory best interests, and long-term advisory relationships. Learn more about our <Link to="/about">approach</Link> and <Link to="/contact">speak with our advisors</Link>.
                                    </p>
                                    <div className="commitment-items">
                                        {commitments.map((item, index) => (
                                            <Fade left delay={300 + (index * 100)} key={index}>
                                                <div className="commitment-item">
                                                    <div className="commitment-icon-wrapper">
                                                        <i className={item.icon}></i>
                                                    </div>
                                                    <div className="commitment-item-content">
                                                        <h3>{item.title}</h3>
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                            </Fade>
                                        ))}
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <Fade right delay={400}>
                                <div className="commitment-image">
                                    <div className="commitment-image-wrapper">
                                        <img 
                                            src="/img/about/1.png" 
                                            alt="Our Commitment" 
                                            className="img-fluid commitment-img"
                                        />
                                        <div className="commitment-image-overlay"></div>
                                        
                                        {/* Floating Card - Top */}
                                        <Fade top delay={600}>
                                            <div className="commitment-floating-card commitment-card-top">
                                                <div className="floating-card-icon">
                                                    <i className="icofont-shield"></i>
                                                </div>
                                                <div className="floating-card-content">
                                                    <div className="floating-card-number">10+</div>
                                                    <div className="floating-card-label">Years Experience</div>
                                                </div>
                                            </div>
                                        </Fade>
                                        
                                        {/* Floating Card - Bottom */}
                                        <Fade bottom delay={700}>
                                            <div className="commitment-floating-card commitment-card-bottom">
                                                <div className="floating-card-icon">
                                                    <i className="icofont-users-alt-5"></i>
                                                </div>
                                                <div className="floating-card-content">
                                                    <div className="floating-card-number">500+</div>
                                                    <div className="floating-card-label">Trusted Clients</div>
                                                </div>
                                            </div>
                                        </Fade>
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

export default OurCommitment;


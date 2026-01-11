import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import { getWhatsAppUrl } from '../utils/urlTransform';

const HowItWorks = () => {
    const steps = [
        {
            number: '01',
            title: 'Free Consultation',
            description: 'We assess your goals, jurisdiction preferences, and regulatory requirements. No obligation, completely confidential.',
            icon: 'icofont-phone'
        },
        {
            number: '02',
            title: 'Strategy & Structuring',
            description: 'We create a compliance-first roadmap tailored to your industry and business model. Clear timeline and transparent pricing.',
            icon: 'icofont-chart-line'
        },
        {
            number: '03',
            title: 'Execution & Support',
            description: 'We handle formation, licensing, banking setup, and provide ongoing compliance support. Dedicated relationship manager assigned.',
            icon: 'icofont-check-circled'
        }
    ];

    return (
        <>
            <section id="how-it-works" className="how-it-works-sec te-pt-100 te-pb-80 te-md-pt-70 te-md-pb-60 te-sm-pt-50 te-sm-pb-40 bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <Fade bottom delay={200}>
                                <div className="sec-title">
                                    <h1>How We Work</h1>
                                    <p className="section-subtitle">
                                        A simple, transparent process from <Link to="/contact">consultation</Link> to ongoing support. No surprises, no hidden fees. Learn about our <Link to="/about">approach</Link> and <Link to="/services">services</Link>.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="row">
                        {steps.map((step, index) => (
                            <Fade bottom delay={300 + (index * 100)} key={index}>
                                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                    <div className="how-it-works-card">
                                        <div className="step-number">{step.number}</div>
                                        <div className="step-icon">
                                            <i className={step.icon}></i>
                                        </div>
                                        <h3>{step.title}</h3>
                                        <p>{step.description}</p>
                                    </div>
                                </div>
                            </Fade>
                        ))}
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-12 text-center">
                            <Fade bottom delay={600}>
                                <a href={getWhatsAppUrl('Hello! I would like to start my free consultation.')} target="_blank" rel="noopener noreferrer" className="theme-btn theme-btn-1">
                                    Start Your Free Consultation
                                </a>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HowItWorks;


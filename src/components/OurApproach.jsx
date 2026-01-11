import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

const OurApproach = () => {
    const approaches = [
        {
            icon: 'icofont-shield',
            title: 'No Shortcuts',
            description: 'We do not offer shortcuts that compromise regulatory integrity. Every recommendation is grounded in thorough analysis of regulatory requirements, jurisdictional frameworks, and long-term compliance obligations. We believe that the right structure, properly established, saves time and cost over the business lifecycle.',
            highlight: 'Integrity First'
        },
        {
            icon: 'icofont-globe-alt',
            title: 'Jurisdiction-Aware Advice',
            description: 'Each jurisdiction has its own regulatory philosophy, enforcement priorities, and compliance culture. We provide advice that is not just legally correct, but contextually appropriate. We understand that what works in one jurisdiction may be inappropriate or even problematic in another, even when both are technically compliant.',
            highlight: 'Contextual Expertise'
        },
        {
            icon: 'icofont-eye',
            title: 'Risk-Conscious Decision-Making',
            description: 'We help clients understand not just what is possible, but what is advisable given their specific circumstances, industry, and growth trajectory. We identify regulatory risks early and help clients make informed decisions that balance opportunity with compliance obligations.',
            highlight: 'Risk Management'
        },
        {
            icon: 'icofont-clock-time',
            title: 'Long-Term Sustainability Over Speed',
            description: 'We prioritize structures and licenses that can scale with your business and adapt to regulatory changes. We think in terms of years, not months. Our approach ensures that the decisions you make today remain sound as your business grows and regulations evolve.',
            highlight: 'Sustainable Growth'
        }
    ];

    return (
        <>
            <section className="our-approach-sec te-pt-100 te-pb-100 te-md-pt-70 te-md-pb-70 te-sm-pt-50 te-sm-pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 text-center">
                            <Fade bottom delay={200}>
                                <div className="sec-title corporate-title">
                                    <span className="section-label">Our Philosophy</span>
                                    <h1>Our Approach</h1>
                                    <p className="section-subtitle">
                                        How Camitrade Investment Fiduciaries thinks and works. Learn more about our <Link to="/corporate-services">corporate services</Link> and <Link to="/licensing-services">licensing solutions</Link>.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="row g-4">
                        {approaches.map((item, index) => (
                            <Fade bottom delay={300 + (index * 100)} key={index}>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="approach-card-corporate">
                                        <div className="approach-card-header">
                                            <div className="approach-icon-wrapper">
                                                <i className={item.icon}></i>
                                            </div>
                                            <div className="approach-number">0{index + 1}</div>
                                        </div>
                                        <div className="approach-card-body">
                                            <div className="approach-highlight">{item.highlight}</div>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurApproach;


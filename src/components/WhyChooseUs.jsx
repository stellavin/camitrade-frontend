import React from 'react';
import { Fade } from 'react-reveal';

const WhyChooseUs = () => {
    const differentiators = [
        {
            icon: 'icofont-globe-alt',
            title: '10+ Jurisdictions',
            description: 'Licensed partners across Africa, Europe, Middle East, and offshore jurisdictions. We know local regulations.',
            highlight: 'Global Reach'
        },
        {
            icon: 'icofont-settings',
            title: 'End-to-End Handling',
            description: 'From company formation → licensing → banking → payments. One partner, complete solution. No handoffs.',
            highlight: 'Complete Solution'
        },
        {
            icon: 'icofont-shield',
            title: 'Regulatory-First Approach',
            description: 'No shortcuts. Compliance-first strategy ensures your business operates legally and avoids regulatory issues.',
            highlight: 'Compliance Guaranteed'
        },
        {
            icon: 'icofont-user-alt-3',
            title: 'Dedicated Relationship Managers',
            description: 'Your dedicated expert handles everything. Direct access, fast response times, personalized service.',
            highlight: 'Personal Service'
        },
        {
            icon: 'icofont-bitcoin',
            title: 'Crypto & Fintech Expertise',
            description: 'Deep experience in crypto-friendly jurisdictions, VASP licensing, and fintech regulatory frameworks.',
            highlight: 'Industry Specialists'
        },
        {
            icon: 'icofont-clock-time',
            title: 'Fast Turnaround',
            description: 'Streamlined processes and established relationships mean faster setup times without compromising compliance.',
            highlight: 'Speed & Efficiency'
        }
    ];

    return (
        <>
            <section className="why-choose-us-modern te-pt-100 te-pb-100 te-md-pt-70 te-md-pb-70 te-sm-pt-50 te-sm-pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 text-center">
                            <Fade bottom delay={200}>
                                <div className="sec-title corporate-title">
                                    <span className="section-label">Our Advantages</span>
                                    <h1>Why Choose Camitrade</h1>
                                    <p className="section-subtitle">
                                        We don't just say we're experts — we prove it with specific capabilities and concrete results.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="row g-4">
                        {differentiators.map((item, index) => (
                            <Fade bottom delay={300 + (index * 100)} key={index}>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="differentiator-card-corporate">
                                        <div className="differentiator-card-header">
                                            <div className="diff-icon-wrapper">
                                                <i className={item.icon}></i>
                                            </div>
                                            <div className="differentiator-number">0{index + 1}</div>
                                        </div>
                                        <div className="differentiator-card-body">
                                            <div className="diff-highlight">{item.highlight}</div>
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

export default WhyChooseUs;


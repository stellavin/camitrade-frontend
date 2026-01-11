import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

const IndustriesWeServe = () => {
    const industries = [
        {
            name: 'Crypto & Blockchain',
            description: 'VASP licensing, crypto-friendly jurisdictions, and regulatory compliance for blockchain businesses.',
            link: '/licensing-services',
            icon: 'icofont-bitcoin',
            color: '#FF6B35'
        },
        {
            name: 'Gaming & Gambling',
            description: 'Gaming licenses, regulatory compliance, and jurisdiction selection for online gaming operators.',
            link: '/licensing-services',
            icon: 'icofont-game-controller',
            color: '#9AC000'
        },
        {
            name: 'Banking & Finance',
            description: 'Banking licenses, payment services, and financial services regulatory compliance.',
            link: '/licensing-services',
            icon: 'icofont-bank-alt',
            color: '#007693'
        },
        {
            name: 'Insurance',
            description: 'Insurance licensing, regulatory compliance, and company formation for insurance providers.',
            link: '/licensing-services',
            icon: 'icofont-shield-alt',
            color: '#FFD700'
        },
        {
            name: 'Funds & Asset Management',
            description: 'Fund structuring, regulatory licensing, and compliance for investment funds and asset managers.',
            link: '/services',
            icon: 'icofont-chart-growth',
            color: '#7fb300'
        },
        {
            name: 'Technology & Software',
            description: 'International company structures, IP protection, and regulatory compliance for tech companies expanding globally.',
            link: '/corporate-services',
            icon: 'icofont-laptop',
            color: '#4262f7'
        }
    ];

    return (
        <>
            <section className="industries-sec te-pt-80 te-pb-80 te-md-pt-60 te-md-pb-60 te-sm-pt-40 te-sm-pb-40 bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <Fade bottom delay={200}>
                                <div className="sec-title">
                                    <h1>Industries We Serve</h1>
                                    <p className="section-subtitle">
                                        Specialized expertise across regulated industries. Each industry has unique requirements — we know them all.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="row">
                        {industries.map((industry, index) => (
                            <Fade bottom delay={300 + (index * 100)} key={index}>
                                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                    <Link to={industry.link} className="industry-card">
                                        <div className="industry-icon" style={{ color: industry.color }}>
                                            <i className={industry.icon}></i>
                                        </div>
                                        <h3>{industry.name}</h3>
                                        <p>{industry.description}</p>
                                        <span className="industry-link">
                                            Learn More <i className="icofont-arrow-right"></i>
                                        </span>
                                    </Link>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default IndustriesWeServe;


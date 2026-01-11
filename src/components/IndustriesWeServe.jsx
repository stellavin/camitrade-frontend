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
            color: '#FF6B35',
            message: 'Hello! I am interested in crypto & blockchain services including VASP licensing and crypto-friendly jurisdictions.'
        },
        {
            name: 'Gaming & Gambling',
            description: 'Gaming licenses, regulatory compliance, and jurisdiction selection for online gaming operators.',
            link: '/licensing-services',
            icon: 'icofont-game-controller',
            color: '#9AC000',
            message: 'Hello! I am interested in gaming & gambling services including gaming licenses and regulatory compliance.'
        },
        {
            name: 'Banking & Finance',
            description: 'Banking licenses, payment services, and financial services regulatory compliance.',
            link: '/licensing-services',
            icon: 'icofont-bank-alt',
            color: '#007693',
            message: 'Hello! I am interested in banking & finance services including banking licenses and payment services.'
        },
        {
            name: 'Insurance',
            description: 'Insurance licensing, regulatory compliance, and company formation for insurance providers.',
            link: '/licensing-services',
            icon: 'icofont-shield-alt',
            color: '#FFD700',
            message: 'Hello! I am interested in insurance services including insurance licensing and regulatory compliance.'
        },
        {
            name: 'Funds & Asset Management',
            description: 'Fund structuring, regulatory licensing, and compliance for investment funds and asset managers.',
            link: '/services',
            icon: 'icofont-chart-growth',
            color: '#7fb300',
            message: 'Hello! I am interested in funds & asset management services including fund structuring and regulatory licensing.'
        },
        {
            name: 'Technology & Software',
            description: 'International company structures, IP protection, and regulatory compliance for tech companies expanding globally.',
            link: '/corporate-services',
            icon: 'icofont-laptop',
            color: '#4262f7',
            message: 'Hello! I am interested in technology & software services including international company structures and IP protection.'
        }
    ];

    return (
        <>
            <section className="industries-sec te-pt-100 te-pb-100 te-md-pt-70 te-md-pb-70 te-sm-pt-50 te-sm-pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 text-center">
                            <Fade bottom delay={200}>
                                <div className="sec-title corporate-title">
                                    <span className="section-label">Our Expertise</span>
                                    <h1>Industries We Serve</h1>
                                    <p className="section-subtitle">
                                        Specialized expertise across regulated industries. Each industry has unique requirements — we know them all. Explore our <Link to="/licensing-services">licensing services</Link> and <Link to="/corporate-services">corporate services</Link>.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="row g-4">
                        {industries.map((industry, index) => (
                            <Fade bottom delay={300 + (index * 100)} key={index}>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <Link to={industry.link} className="industry-card-corporate">
                                        <div className="industry-card-header">
                                            <div className="industry-icon-wrapper">
                                                <div className="industry-icon" style={{ color: industry.color }}>
                                                    <i className={industry.icon}></i>
                                                </div>
                                            </div>
                                            <div className="industry-number">0{index + 1}</div>
                                        </div>
                                        <div className="industry-card-body">
                                            <h3>{industry.name}</h3>
                                            <p>{industry.description}</p>
                                        </div>
                                        <div className="industry-card-footer">
                                            <span className="industry-link">
                                                Explore Services
                                                <i className="icofont-arrow-right"></i>
                                            </span>
                                        </div>
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


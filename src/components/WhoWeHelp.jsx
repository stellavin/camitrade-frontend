import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import { getWhatsAppUrl } from '../utils/urlTransform';

const WhoWeHelp = () => {
    const clients = [
        {
            icon: 'icofont-bitcoin',
            title: 'Fintech & Crypto Founders',
            description: 'Crypto-friendly jurisdictions, VASP licensing, and regulatory compliance for blockchain businesses.',
            link: '/licensing-services',
            cta: 'Speak to a Crypto Advisor',
            message: 'Hello! I am a fintech/crypto founder and would like to speak to a crypto advisor about VASP licensing and crypto-friendly jurisdictions.'
        },
        {
            icon: 'icofont-chart-growth',
            title: 'Investment & Fund Managers',
            description: 'Fund structuring, regulatory licensing, and compliance across multiple jurisdictions.',
            link: '/services',
            cta: 'Discuss Fund Setup',
            message: 'Hello! I am an investment/fund manager and would like to discuss fund setup and regulatory licensing.'
        },
        {
            icon: 'icofont-globe',
            title: 'International Entrepreneurs',
            description: 'Company formation, banking solutions, and global expansion support.',
            link: '/corporate-services',
            cta: 'Start Company Formation',
            message: 'Hello! I am an international entrepreneur and would like to start company formation and explore banking solutions.'
        },
        {
            icon: 'icofont-bank-alt',
            title: 'Financial Institutions',
            description: 'Payment services licensing, banking solutions, and regulatory advisory.',
            link: '/licensing-services',
            cta: 'Talk to a Banking Specialist',
            message: 'Hello! I represent a financial institution and would like to talk to a banking specialist about payment services licensing.'
        },
        {
            icon: 'icofont-users-alt-5',
            title: 'High-Net-Worth Individuals',
            description: 'Trust & foundation services, asset protection, and wealth structuring.',
            link: '/corporate-services',
            cta: 'Get Expert Advice',
            message: 'Hello! I am a high-net-worth individual and would like expert advice on trust & foundation services and asset protection.'
        },
        {
            icon: 'icofont-briefcase',
            title: 'Startups & Growing Businesses',
            description: 'Scalable company structures, compliance frameworks, and growth-oriented solutions for emerging companies.',
            link: '/corporate-services',
            cta: 'Explore Solutions',
            message: 'Hello! I represent a startup/growing business and would like to explore scalable company structures and compliance solutions.'
        }
    ];

    return (
        <>
            <section id="who-we-help" className="who-we-help-sec te-pt-100 te-pb-80 te-md-pt-70 te-md-pb-60 te-sm-pt-50 te-sm-pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <Fade bottom delay={200}>
                                <div className="sec-title">
                                    <h1>Who We Help</h1>
                                    <p className="section-subtitle">
                                        We serve businesses and individuals across industries, providing tailored solutions for <Link to="/jurisdictions">global expansion</Link> and <Link to="/licensing-services">compliance</Link>. Explore our <Link to="/corporate-services">corporate services</Link> and <Link to="/about">learn more about our approach</Link>.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="row">
                        {clients.map((client, index) => (
                            <Fade bottom delay={300 + (index * 100)} key={index}>
                                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                    <div className={`who-we-help-card who-we-help-card-${index % 6}`}>
                                        <div className="who-we-help-illustration">
                                            <i className={client.icon}></i>
                                        </div>
                                        <h3>{client.title}</h3>
                                        <p>{client.description}</p>
                                        <a href={getWhatsAppUrl(client.message)} target="_blank" rel="noopener noreferrer" className="who-we-help-cta-btn">
                                            {client.cta}
                                            <span className="cta-arrow-circle">
                                                <i className="icofont-arrow-right"></i>
                                            </span>
                                        </a>
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

export default WhoWeHelp;


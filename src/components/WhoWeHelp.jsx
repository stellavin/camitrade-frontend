import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

const WhoWeHelp = () => {
    const clients = [
        {
            icon: 'icofont-bitcoin',
            title: 'Fintech & Crypto Founders',
            description: 'Crypto-friendly jurisdictions, VASP licensing, and regulatory compliance for blockchain businesses.',
            link: '/licensing-services',
            cta: 'Speak to a Crypto Advisor'
        },
        {
            icon: 'icofont-chart-growth',
            title: 'Investment & Fund Managers',
            description: 'Fund structuring, regulatory licensing, and compliance across multiple jurisdictions.',
            link: '/services',
            cta: 'Discuss Fund Setup'
        },
        {
            icon: 'icofont-globe',
            title: 'International Entrepreneurs',
            description: 'Company formation, banking solutions, and global expansion support.',
            link: '/corporate-services',
            cta: 'Start Company Formation'
        },
        {
            icon: 'icofont-bank-alt',
            title: 'Financial Institutions',
            description: 'Payment services licensing, banking solutions, and regulatory advisory.',
            link: '/licensing-services',
            cta: 'Talk to a Banking Specialist'
        },
        {
            icon: 'icofont-users-alt-5',
            title: 'High-Net-Worth Individuals',
            description: 'Trust & foundation services, asset protection, and wealth structuring.',
            link: '/corporate-services',
            cta: 'Get Expert Advice'
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
                                        We serve businesses and individuals across industries, providing tailored solutions for global expansion and compliance.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="row">
                        {clients.map((client, index) => (
                            <Fade bottom delay={300 + (index * 100)} key={index}>
                                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                    <div className="who-we-help-card">
                                        <div className="client-icon">
                                            <i className={client.icon}></i>
                                        </div>
                                        <h3>{client.title}</h3>
                                        <p>{client.description}</p>
                                        <Link to={client.link} className="client-cta-link">
                                            {client.cta} <i className="icofont-arrow-right"></i>
                                        </Link>
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


import React from 'react';
import { Fade } from 'react-reveal';

const TrustSignals = () => {
    const signals = [
        {
            icon: 'icofont-globe-alt',
            number: '10+',
            label: 'Jurisdictions Served',
            description: 'Africa, Europe, Middle East & Offshore'
        },
        {
            icon: 'icofont-users-alt-5',
            number: '500+',
            label: 'Global Clients',
            description: 'Trusted by businesses worldwide'
        },
        {
            icon: 'icofont-shield',
            label: 'Regulatory Compliant',
            description: 'Licensed by Financial Services Authority'
        },
        {
            icon: 'icofont-clock-time',
            label: 'Fast Response',
            description: 'We respond within 24 hours'
        }
    ];

    return (
        <>
            <section className="trust-signals-sec te-pt-60 te-pb-60 te-md-pt-40 te-md-pb-40 te-sm-pt-30 te-sm-pb-30">
                <div className="container">
                    <div className="row">
                        {signals.map((signal, index) => (
                            <Fade bottom delay={200 + (index * 100)} key={index}>
                                <div className="col-lg-3 col-md-6 col-6 mb-4">
                                    <div className={`trust-signal-card ${index % 2 === 0 ? 'trust-card-green' : 'trust-card-teal'}`}>
                                        <div className="trust-icon">
                                            <i className={signal.icon}></i>
                                        </div>
                                        {signal.number && (
                                            <div className="trust-number">{signal.number}</div>
                                        )}
                                        <h4>{signal.label}</h4>
                                        <p>{signal.description}</p>
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

export default TrustSignals;


import React from 'react';
import ContactForm from './ContactForm';
import { Fade } from 'react-reveal';

const ContactPageContent = () => {
    const contactCards = [
        {
            number: '01',
            icon: 'icofont-google-map',
            title: 'Office: Kenya',
            description: 'West Park Towers, Mpesi Lane, Nairobi, Kenya'
        },
        {
            number: '02',
            icon: 'icofont-google-map',
            title: 'Office: Seychelles',
            description: 'Providence, Mahe, Seychelles'
        },
        {
            number: '03',
            icon: 'icofont-google-map',
            title: 'Office: Dubai',
            description: 'Business Bay, Dubai, UAE'
        },
        {
            number: '04',
            icon: 'icofont-google-map',
            title: 'Office: Saint Vincent',
            description: 'St. Vincent Bank Ltd. Building, James Street, Kingston, St. Vincent & the Grenadines'
        },
        {
            number: '05',
            icon: 'icofont-google-map',
            title: 'Office: Mauritius',
            description: 'Suite 201, The Catalyst, 40 Silicon Ave, Ebene'
        },
        {
            number: '06',
            icon: 'icofont-telephone',
            title: 'Call Us for Immediate Assistance',
            description: '+248 2 668 292 • +971 56 106 6155 • +254 715 826 827 • +357 95 990 867'
        },
        {
            number: '07',
            icon: 'icofont-envelope-open',
            title: 'Email Address',
            description: 'info@camitrade.com • sales@camitrade.com'
        }
    ];

    return (
        <>
            <section className="contact-page-sec te-pt-100 te-pb-80 te-pt-md-70 te-md-pb-50 te-sm-pt-50 te-sm-pb-20 bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <Fade bottom delay={200}>
                                <div className="sec-title">
                                    <h1>Get In Touch</h1>
                                    <p className="section-subtitle">
                                        Contact us at any of our global offices or reach out directly. We're here to help you navigate international business with confidence.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="row">
                        {contactCards.map((card, index) => (
                            <Fade bottom delay={300 + (index * 100)} key={index}>
                                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                    <div className="contact-info-card">
                                        <div className="contact-step-number">{card.number}</div>
                                        <div className="contact-step-icon">
                                            <i className={card.icon}></i>
                                        </div>
                                        <h3>{card.title}</h3>
                                        <p>{card.description}</p>
                                    </div>
                                </div>
                            </Fade>
                        ))}
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-8 offset-lg-2">
                            <ContactForm 
                                heading={'Request a Free Consultation'} 
                                description={'No obligation • Confidential • 30-minute expert call'}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPageContent;

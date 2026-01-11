import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import { toast } from 'react-toastify';
import axios from 'axios';
import ReactGA from 'react-ga';

// Initialize ReactGA with your Google Analytics tracking ID
ReactGA.initialize('G-PWXX0RHDML');

const Consultation = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleMessage = async (event) => {
        event.preventDefault();

        try {
            // Replace with your actual server endpoint.
            const response = await axios.post('https://radiant-forest-85440-7635edd64cab.herokuapp.com/sendmail', formData);

            if (response.status === 200) {
                toast("Message Sent Successfully");

                // Track the form submission event
                ReactGA.event({
                    category: 'Consultation Form',
                    action: 'Submitted Form',
                });

                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            }
        } catch (error) {
            // Handle any errors here (e.g., show an error message).
            console.error('Error sending message:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <>
            <div className="consulting-form-sec">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Fade left delay={300}>
                                <div className="consulting-form">
                                    <div className="consulting-form-header">
                                        <div className="consulting-form-icon">
                                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
                                            </svg>
                                        </div>
                                        <div className="consulting-form-title">
                                            <h1>Request a Free Consultation</h1>
                                            <p>Kindly fill out the form, and one of our experts will be in touch with you within the next 24 hours.</p>
                                        </div>
                                        <div className="consulting-benefits">
                                            <div className="benefit-item">
                                                <span className="benefit-icon">✓</span>
                                                <span>No obligation</span>
                                            </div>
                                            <div className="benefit-item">
                                                <span className="benefit-icon">✓</span>
                                                <span>Confidential</span>
                                            </div>
                                            <div className="benefit-item">
                                                <span className="benefit-icon">✓</span>
                                                <span>30-minute expert call</span>
                                            </div>
                                        </div>
                                    </div>
                                    <form onSubmit={handleMessage} className="consultation-form-wrapper">
                                        <div className="row">
                                            <div className="form-group col-md-6 col-sm-12 input-inner">
                                                <label htmlFor="name">Full Name *</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Enter your full name"
                                                    autoComplete="on"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group col-md-6 col-sm-12 input-inner">
                                                <label htmlFor="email">Email Address *</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Enter your email"
                                                    autoComplete="on"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group col-md-12 input-inner">
                                                <label htmlFor="subject">Subject *</label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    placeholder="What would you like to discuss?"
                                                    autoComplete="on"
                                                    required
                                                    value={formData.subject}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="message">Message *</label>
                                                <textarea
                                                    id="message"
                                                    placeholder="Tell us about your requirements..."
                                                    name="message"
                                                    autoComplete="on"
                                                    required
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                ></textarea>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <button className='consultation-submit-btn' type="submit">
                                                    <span>Request Free Consultation</span>
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <Fade right delay={500}>
                                <div className="consulting-form-image">
                                    <div className="image-wrapper">
                                        <div className="image-container">
                                            <img src="/img/slider/slider-c2.png" alt="Consultation" className="img-fluid" />
                                        </div>
                                        <div className="image-overlay-decoration"></div>
                                        <div className="consultation-stats">
                                            <div className="stat-item stat-top-right">
                                                <div className="stat-number">24hrs</div>
                                                <div className="stat-label">Response Time</div>
                                            </div>
                                            <div className="stat-item stat-bottom-left">
                                                <div className="stat-number">100%</div>
                                                <div className="stat-label">Confidential</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Consultation;

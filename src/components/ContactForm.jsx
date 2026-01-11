import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import ReactGA from 'react-ga';

// Initialize ReactGA with your Google Analytics tracking ID
ReactGA.initialize('G-PWXX0RHDML');

const ContactForm = ({heading, description}) => {
 

    return (
        <>
            <div className="comment-field">
                <h2 className="comment-form-title">{heading}</h2>
                <p>{description}</p>
                <form action="https://formcarry.com/s/QllHeEsxUHI" method="POST" enctype="multipart/form-data" className="commentform">
                    <div className="row form-fields">
                        <p className="comment-author col-md-6">
                            <input
                                placeholder="Name*"
                                type="text"
                                name="name"
                                autoComplete="off"
                                required
                                id="fc-generated-1-name"
                            />
                        </p>
                        <p className="author-email col-md-6">
                            <input
                                placeholder="Email Address*"
                                type="email"
                                name="email"
                                autoComplete="off"
                                required
                               id="fc-generated-1-email"
                            />
                        </p>
                        <p className="comment-author col-md-12">
                            <input
                                placeholder="Subject*"
                                type="text"
                                name="subject"
                                autoComplete="off"
                                required
                               id="fc-generated-1-subject"
                            />
                        </p>
                    </div>
                    <p className="comment-form">
                        <textarea
                            placeholder="Write Your Message*"
                            name="message"
                            autoComplete="off"
                            cols="20"
                            rows="5"
                            required
                           id="fc-generated-1-message"
                        ></textarea>
                    </p>
                    <p className="form-submit">
                        <button className="theme-btn theme-btn-1" type="submit">
                            Request a Free Consultation
                        </button>
                        <p style={{ marginTop: '10px', fontSize: '14px', color: '#666', fontStyle: 'italic' }}>
                            We respond within 24 hours • Your information is confidential
                        </p>
                    </p>
                </form>
            </div>
        </>
    );
};

export default ContactForm;

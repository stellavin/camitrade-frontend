import React from 'react';
import ContactForm from './ContactForm';
import { toast } from 'react-toastify';

const ContactPageContent = () => {

    const handleSubscribe = (event) => {
        event.preventDefault()
        event.target.reset()
        toast("Subscribed Successfully")
    }

    return (
        <>
            <section className="contact-page-sec te-pt-100 te-pb-80 te-pt-md-70 te-md-pb-50 te-sm-pt-50 te-sm-pb-20">
                <div className="container">
                <div className="row">
                        <div className="col-lg-3 col-md-6 d-lg-flex d-md-flex">
                            <div className="contact-info-inner">
                                <div className="contact-info-icon">
                                    <i className="icofont-google-map"></i>
                                </div>
                                <div className="contact-info-text">
                                    <h2>Office: Kenya</h2>
                                    <span>West Park Towers, Mpesi Lane,</span>
                                    <span>Nairobi, Kenya</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-lg-flex d-md-flex">
                            <div className="contact-info-inner">
                                <div className="contact-info-icon">
                                    <i className="icofont-google-map"></i>
                                </div>
                                <div className="contact-info-text">
                                    <h2>Office: Seychelles</h2>
                                    <span>Providence &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                                    <span>Mahe, Seychelles  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-lg-flex d-md-flex">
                            <div className="contact-info-inner">
                                <div className="contact-info-icon">
                                    <i className="icofont-google-map"></i>
                                </div>
                                <div className="contact-info-text">
                                    <h2>Office: Dubai</h2>
                                    <span>Business Bay &nbsp; &nbsp; &nbsp; &nbsp;  </span>
                                    <span>Dubai, UAE &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-lg-flex d-md-flex">
                            <div className="contact-info-inner">
                                <div className="contact-info-icon">
                                    <i className="icofont-google-map"></i>
                                </div>
                                <div className="contact-info-text">
                                    <h2>Office: Saint Vincent</h2>
                                    <span>St. Vincent Bank Ltd. Building </span>
                                    <span>James Street, Kingston</span>
                                    <span>St. Vincent & the Grenadines</span>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <br></br>
                    <div className="row">
                    <div className="col-lg-3 col-md-6 d-lg-flex d-md-flex">
                            <div className="contact-info-inner">
                                <div className="contact-info-icon">
                                    <i className="icofont-google-map"></i>
                                </div>
                                <div className="contact-info-text">
                                    <h2>Office: Mauritius</h2>
                                    <span>Suite 201, The Catalyst,</span>
                                    <span>40 Silicon Ave,</span>
                                    <span>Ebene</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 d-lg-flex d-md-flex">
                            <div className="contact-info-inner">
                                <div className="contact-info-icon">
                                    <i className="icofont-telephone"></i>
                                </div>
                                <div className="contact-info-text">
                                    <h2>phone number</h2>
                                    <span><a href="tel:+248 2 668 292" className='me-1'>+248 2 668 292</a></span>
                                    <span><a href="tel:+971 56 106 6155">+971 56 106 6155</a></span>
                                    <span><a href="tel:+254 715 826 827" className='me-1'>+254 715 826 827</a></span>
                                    <span><a href="tel:+357 95 990 867">+357 95 990 867</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-lg-flex d-md-flex">
                            <div className="contact-info-inner">
                                <div className="contact-info-icon">
                                    <i className="icofont-envelope-open"></i>
                                </div>
                                <div className="contact-info-text">
                                    <h2>email address</h2>
                                    <span><a href="mailto:jeanne@hotmail.com">info@camitrade.com</a></span>
                                    <span><a href="mailto:ytillman@gmail.com">sales@camitrade.com</a></span>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-md-6 d-lg-flex d-md-flex">
                            <div className="contact-info-inner">
                                <div className="contact-info-icon">
                                    <i className="icofont-paper-plane"></i>
                                </div>
                                <div className="contact-info-text">
                                    <h2>subscribe</h2>
                                    <form className='contact-info-subscribe' onSubmit={handleSubscribe}>
                                        <input type="email" placeholder="Email" name='email' autoComplete='off' required />
                                        <button type='submit'><i className="icofont-paper-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <ContactForm heading={'Get in touch'} />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default ContactPageContent;
import React from 'react';
import { Fade } from 'react-reveal';
import SocialShare from './SocialShare';
import { HashLink as Link } from 'react-router-hash-link';
import footerLogo from '/img/footer/footer-logo.png'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-widget">
                                <Fade left delay={200}>
                                    <div className="footer-widget-one">
                                        <Link className="footer-logo" to="/#"><img src={footerLogo} alt="footerLogo" /></Link>
                                        <p>We offer global solutions for businesses and individuals looking to go global </p>
                                        <div className="footer-social-profile">
                                            <SocialShare />
                                        </div>
                                    </div>
                                </Fade>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-widget">
                                <Fade left delay={400}>
                                    <div className="footer-widget-two">
                                        <h2>quick link</h2>
                                        <ul>
                                            <li><Link to="/about#">about us</Link></li>
                                            <li><Link to="/services#">services</Link></li>
                                            <li><Link to="/contact#">Contact Us</Link></li>
                                            <li><Link to="/contact#">feedback</Link></li>
                                            <li><Link to="/contact#">support</Link></li>
                                        </ul>
                                    </div>
                                </Fade>
                            </div>


                            <div className="col-lg-3 col-md-6 footer-widget">
                                <Fade left delay={800}>
                                    <div className="footer-widget-four">
                                        <h2>Location</h2>
                                        <div className="inner-box">
                                            <div className="inner-item">
                                                <div className="media">
                                                    <div className="media-left">
                                                        <span className="icon"><i className="icofont-location-pin"></i></span>
                                                    </div>
                                                    <div className="media-body">
                                                        <span className="inner-text">Kenya</span> <br />
                                                        <span className="inner-text">The Address, Westlands, Nairobi, Kenya</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="inner-item">
                                                <div className="media">
                                                    <div className="media-left">
                                                        <span className="icon"><i className="icofont-location-pin"></i></span>
                                                    </div>
                                                    <div className="media-body">
                                                        <span className="inner-text">St. Vincent and the Grenadines</span> <br />
                                                        <span className="inner-text">St. Vincent Bank Ltd Building, James, Street Kingston, St.Vincent and the Grenadines.</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="inner-item">
                                                <div className="media">
                                                    <div className="media-left">
                                                        <span className="icon"><i className="icofont-location-pin"></i></span>
                                                    </div>
                                                    <div className="media-body">
                                                        <span className="inner-text">Seychelles</span> <br />
                                                        <span className="inner-text">Providence, Mahe, Seychelles</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="inner-item">
                                                <div className="media">
                                                    <div className="media-left">
                                                        <span className="icon"><i className="icofont-location-pin"></i></span>
                                                    </div>
                                                    <div className="media-body">
                                                        <span className="inner-text">Mauritius</span> <br />
                                                        <span className="inner-text">Suite 201, The Catalyst,</span>
                                                        <span className="inner-text">40 Silicon Ave,</span>
                                                        <span className="inner-text">Ebene</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="inner-item">
                                                <div className="media">
                                                    <div className="media-left">
                                                        <span className="icon"><i className="icofont-location-pin"></i></span>
                                                    </div>
                                                    <div className="media-body">
                                                        <span className="inner-text">Dubai</span> <br />
                                                        <span className="inner-text">Business Bay Dubai, UAE </span>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                         
                                        </div>
                                    </div>
                                </Fade>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-widget">
                                <Fade left delay={800}>
                                    <div className="footer-widget-four">
                                        <h2>contact us</h2>
                                        <div className="inner-box">
                                        
                                            <div className="inner-item">
                                                <div className="media">
                                                    <div className="media-left">
                                                        <span className="icon"><i className="icofont-envelope"></i></span>
                                                    </div>
                                                    <div className="media-body">
                                                        <a className="inner-text" href="mailto:info@camitrade.com">info@camitrade.com</a> <br />
                                                        <a className="inner-text" href="mailto:sales@camitrade.com">sales@camitrade.com</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="inner-item">
                                                <div className="media">
                                                    <div className="media-left">
                                                        <span className="icon"><i className="icofont-ui-call"></i></span>
                                                    </div>
                                                    <div className="media-body">
                                                        <a className="inner-text" href="tel:+248 2 668 292">+248 2 668 292</a> <br />
                                                        <a className="inner-text" href="tel:+971 56 106 6155">+971 56 106 6155</a><br />
                                                        <a className="inner-text" href="tel:+254 715 826 827">+254 715 826 827</a><br />
                                                        <a className="inner-text" href="tel:+357 95 990867">+357 95 990 867</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="footer-bottom-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <Fade top delay={1000}>
                                    <div className="copy-right">
                                        <p>&copy; {new Date().getFullYear()} Camitrade Investment Fiduciaries. All Rights Reserved.</p>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
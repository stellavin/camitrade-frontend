import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

const FooterCTA = () => {
    return (
        <>
            <div className="footer-cta-sec" style={{ 
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                padding: '60px 0',
                position: 'relative',
                zIndex: 1
            }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <Fade left delay={300}>
                                <div className="footer-cta-text">
                                    <h2 style={{ 
                                        color: '#fff', 
                                        fontSize: '32px', 
                                        marginBottom: '15px',
                                        fontWeight: '600'
                                    }}>
                                        Let's Build Your Global Business — The Right Way
                                    </h2>
                                    <p style={{ 
                                        color: '#e0e0e0', 
                                        fontSize: '18px',
                                        marginBottom: '0'
                                    }}>
                                        From company formation to licensing and banking, we handle it all.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-4">
                            <Fade right delay={500}>
                                <div className="text-right" style={{ 
                                    display: 'flex', 
                                    gap: '15px', 
                                    justifyContent: 'flex-end', 
                                    flexWrap: 'wrap',
                                    marginTop: '20px'
                                }}>
                                    <Link to="/contact" className="btn" style={{
                                        background: '#fff',
                                        color: '#1a1a2e',
                                        padding: '12px 30px',
                                        borderRadius: '5px',
                                        textDecoration: 'none',
                                        fontWeight: '600',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        Book a Free Consultation
                                    </Link>
                                    <Link to="/contact" className="btn" style={{ 
                                        background: 'transparent', 
                                        color: '#fff', 
                                        border: '2px solid #fff',
                                        padding: '12px 30px',
                                        borderRadius: '5px',
                                        textDecoration: 'none',
                                        fontWeight: '600',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        Contact Our Experts
                                    </Link>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterCTA;


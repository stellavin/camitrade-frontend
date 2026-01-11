import React from 'react';
import { Fade } from 'react-reveal';
import Happy2026Animation from './Happy2026Animation';
import { getWhatsAppUrl } from '../utils/urlTransform';

const SingleBanner = ({ banner, hasOffer }) => {
    let { image, title, subtitle, btnTextOne, btnTextTwo, btnLinkOne, btnLinkTwo } = banner;

    return (
        <>
            <div className="slider" >
                <div className="all-slide item">
                    <div className="single-slide"
                        style={{ backgroundImage: `url(/img/slider/${image})` }}>
                            {
                                !hasOffer && (
                                    <div className="slider-overlay"></div>
                                )
                            }
                        <Happy2026Animation />
                        <div className="slider-wrapper container">
                            <div className="slider-text">
                                <div className="slider-caption">
                                    <Fade bottom delay={500}>
                                        <h1>{title}</h1>
                                        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
                                    </Fade>
                                    <Fade top delay={700}>
                                        
                                            { hasOffer ? (
                                                <ul>
                                                 <li><a href={getWhatsAppUrl('Hello! I would like to learn more about your services.')} target="_blank" rel="noopener noreferrer" className='theme-btn theme-btn-1 offer-btn'>{btnTextOne}</a></li>
                                                 </ul>
                                            ):(
                                                <ul>
                                                {btnTextOne && btnLinkOne && (
                                                    <li><a href={getWhatsAppUrl('Hello! I would like to book a free consultation.')} target="_blank" rel="noopener noreferrer" className='theme-btn theme-btn-1'>{btnTextOne}</a></li>
                                                )}
                                                {btnTextTwo && btnLinkTwo && (
                                                    <li><a href={getWhatsAppUrl('Hello! I would like to learn more about how it works.')} target="_blank" rel="noopener noreferrer" className='theme-btn theme-btn-1-outline'>{btnTextTwo}</a></li>
                                                )}
                                                </ul>

                                            )}
                                           
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBanner;
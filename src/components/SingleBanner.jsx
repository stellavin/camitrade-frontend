import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleBanner = ({ banner, hasOffer }) => {
    let { image, title, btnTextOne, btnTextTwo, btnLinkOne, btnLinkTwo } = banner;

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
                        <div className="slider-wrapper container">
                            <div className="slider-text">
                                <div className="slider-caption">
                                    <Fade bottom delay={500}><h1>{title}</h1></Fade>
                                    <Fade top delay={500}>
                                        
                                            { hasOffer ? (
                                                <ul>
                                                 <li><Link to="/services#" className='theme-btn theme-btn-1 offer-btn'>{btnTextOne}</Link></li>
                                                 </ul>
                                            ):(
                                                <ul>
                                                {btnTextOne && btnLinkOne && (
                                                    <li><Link to={btnLinkOne} className='theme-btn theme-btn-1'>{btnTextOne}</Link></li>
                                                )}
                                                {btnTextTwo && btnLinkTwo && (
                                                    <li><Link to={btnLinkTwo} className='theme-btn theme-btn-1-outline'>{btnTextTwo}</Link></li>
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
import React from 'react';
import SocialShare from './SocialShare';
import mailIcon from '/img/icon/mailIcon.png'
import locationIcon from '/img/icon/locationIcon.png'

const HeaderTwoTopbar = () => {
    return (
        <>
            <div className="header-top-v2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12 d-none d-md-block contact-intro-inner">
                            <div className="contact-intro">
                                <div className="info-intro">
                                    <div className="info-icon">
                                        <img src={mailIcon} alt="mailIcon" />
                                    </div>
                                    <div className="info-text">
                                        <h5>mail us </h5>
                                        <a href="mailto:info@camitrade.com">info@camitrade.com</a>
                                    </div>
                                </div>
                                <div className="info-intro">
                                    <div className="info-icon">
                                        <img src={locationIcon} alt="locationIcon" />
                                    </div>
                                    <div className="info-text">
                                        <h5>welcome </h5>
                                        <span>Providence, Mahe, Seychelles</span>
                                    </div>
                                </div>
                                <div className="info-intro">
                                    <div className="social-profile">
                                        <SocialShare />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3  d-none d-lg-block ">
                            <div className="office-number">
                                <ul>
                                    <li><span>Call us</span><a href="tel:2482611651​"> +2 (482) 611 651​</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTwoTopbar;
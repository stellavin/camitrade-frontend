import React from 'react';
import SocialShare from './SocialShare';

const HeaderTopbar = () => {
    return (
        <>
            <div className="header-top d-none d-md-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-8">
                            <div className="header-left titl_font-style">
                                <ul>
                                    <li>
                                        <a href="mailto:info@camitrade.com">
                                            <i className="icofont-envelope-open">
                                            </i>info@camitrade.com</a>
                                    </li>
                                    <li>
                                        <i className="icofont-map-pins"></i>
                                        Suite 201, The Catalyst ,40 Silicon Ave, Ebene, Mauritius</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-4">
                            <div className="header-right-div">
                                <div className="soical-profile">
                                    <SocialShare />
                                    <div id="google_translate_element"></div>
                                </div>
                                <div className="office-number titl_font-style">
                                    <ul>
                                        <li><span className='titl_font-style'>Call us</span>
                                            <a href="tel:2482611651​" className='titl_font-style'>+2 (482) 611 651</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTopbar;
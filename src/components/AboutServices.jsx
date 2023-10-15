import React from 'react';
import AboutContent from './AboutContent';
import SingleFaq from './SingleFaq';
import FaqData from '../jsonData/FaqData.json'

const AboutServices = () => {
    return (
        <>
            <div className="home-two-about">
                <div className="about-us-sec bg-deep">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <AboutContent sign="whiteSignature" />
                            </div>
                            <div className="col-md-6 d-none d-md-block align-self-center">
                                <div className="faq-sec">
                                    {FaqData.map(faq =>
                                        <SingleFaq faq={faq} key={faq.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutServices;
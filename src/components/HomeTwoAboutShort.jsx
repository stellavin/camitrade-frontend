import React from 'react';
import videoThumb from '/img/video/video-thumb.jpg'
import AboutShortText from './AboutShortText';
import { Fade } from 'react-reveal';

const HomeTwoAboutShort = () => {
    return (
        <>
            <section className="about-us-short-sec bg-blue-dark te-pt-100 te-pb-100 te-md-pt-70 te-md-pb-70 te-sm-pt-50 te-sm-pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 align-self-center">
                            <Fade left delay={300}>
                                <AboutShortText />
                            </Fade>
                        </div>
                        <div className="col-md-5">
                            <Fade right delay={600}>
                                <div className="video-inner">
                                    <img src={videoThumb} alt="videoThumb" />
                                    <div className="video-overlay">
                                        <div className="video-button">
                                            <a href="https://www.youtube.com/watch?v=7e90gBu4pas" target='_blank' className="mfp-iframe vedio-play"><i className="icofont-play"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeTwoAboutShort;
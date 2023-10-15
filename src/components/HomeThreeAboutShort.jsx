import React from 'react';
import AboutShortText from './AboutShortText';
import ImageVideo from './ImageVideo';
import { Fade } from 'react-reveal';


const HomeThreeAboutShort = () => {
    return (
        <>
            <section className="home-three">
                <div className="about-us-short-sec te-pb-120 te-md-pb-70 te-sm-pb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 align-self-center">
                                <Fade left delay={300}>
                                    <AboutShortText />
                                </Fade>
                            </div>
                            <div className="col-lg-5">
                                <Fade right delay={600}>
                                    <ImageVideo />
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeThreeAboutShort;
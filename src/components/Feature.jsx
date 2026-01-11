import React from 'react';
import { Fade } from 'react-reveal';
import SingleFeature from './SingleFeature';
import FeatureData from '../jsonData/FeatureData.json'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Feature = () => {
    const CustomRightArrow = ({ onClick }) => {
        return <button className='commonArrow arrowRight feature-arrow' onClick={() => onClick()}><i className="icofont-rounded-right"></i></button>;
    };

    const CustomLeftArrow = ({ onClick }) => {
        return <button className='commonArrow arrowLeft feature-arrow' onClick={() => onClick()}><i className="icofont-rounded-left"></i></button>;
    };

    return (
        <>
            <section className="feature-sec-modern te-pt-100 te-pb-90 te-md-pt-70 te-md-pb-60 te-sm-pt-40 te-sm-pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <Fade bottom delay={200}>
                                <div className="sec-title">
                                    <h1>Our Global Services</h1>
                                    <p className="section-subtitle">
                                        Comprehensive solutions for global business expansion, compliance, and growth across multiple jurisdictions.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="row">
                        {FeatureData.slice(0, 6).map((feature, index) => (
                            <SingleFeature feature={feature} key={feature.id} delay={300 + (index * 100)} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Feature;
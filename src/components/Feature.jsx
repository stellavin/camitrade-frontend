import React from 'react';
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
            <section className="feature-sec te-pt-100 te-pb-90 te-md-pt-70 te-md-pb-60 te-sm-pt-40 te-sm-pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="sec-title">
                                <h1>Our Global Services</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="feature-carousel-wrap">
                            <Carousel
                                infinite={true}
                                draggable={true}
                                arrows={true}
                                pauseOnHover={true}
                                slidesToSlide={1}
                                showDots={false}
                                swipeable={true}
                                autoPlay={false}
                                customRightArrow={<CustomRightArrow />}
                                customLeftArrow={<CustomLeftArrow />}
                                autoPlaySpeed={3000}
                                responsive={{
                                    desktop: {
                                        breakpoint: {
                                            max: 3000,
                                            min: 992
                                        },
                                        items: 3,
                                    },
                                    tablet: {
                                        breakpoint: {
                                            max: 991,
                                            min: 577
                                        },
                                        items: 2,
                                    },
                                    mobile: {
                                        breakpoint: {
                                            max: 576,
                                            min: 1
                                        },
                                        items: 1,
                                    }
                                }}>
                                {FeatureData.map(feature =>
                                    <SingleFeature feature={feature} key={feature.id} inCarousel={true} />
                                )}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Feature;
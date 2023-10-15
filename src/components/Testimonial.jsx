import React from 'react';
import TestimonialData from '../jsonData/TestimonialData.json'
import SingleTestimonial from './SingleTestimonial';
import Carousel from 'react-multi-carousel';

const Testimonial = (props) => {
    let { parallaxTestimonial } = props;
    let { bgTestimonial } = props;

    return (
        <>
            <section className={`${parallaxTestimonial} ${bgTestimonial} testimonial-area te-pt-90 te-pb-80 te-md-pt-80 te-md-pb-60 te-sm-pt-40 te-sm-pb-50`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-12 offset-lg-1 ">
                            <div className="sec-title">
                                <h1>What Our Clients Say</h1>
                                <p>At Camitrade Investment Fiduciaries, the satisfaction and success of our clients are at the heart of everything we do. We take pride in providing invaluable guidance and exemplary services tailored to the intricate landscape of company incorporation. Here's what some of our clients have to say about Our experience with us:</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="client-carousel">
                                <Carousel
                                    infinite={false}
                                    draggable={true}
                                    arrows={false}
                                    pauseOnHover={true}
                                    slidesToSlide={1}
                                    showDots={true}
                                    swipeable={true}
                                    autoPlay={true}
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
                                                min: 768
                                            },
                                            items: 2,
                                        },
                                        mobile: {
                                            breakpoint: {
                                                max: 767,
                                                min: 1
                                            },
                                            items: 1,
                                        }
                                    }}>

                                    {TestimonialData.map(testimonial =>
                                        <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
                                    )}

                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonial;
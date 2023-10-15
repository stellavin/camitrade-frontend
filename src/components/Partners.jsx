import React from 'react';
import PartnersData from '../jsonData/PartnersData.json'
import SinglePartner from './SinglePartner';
import Carousel from 'react-multi-carousel';

const Partners = () => {
    return (
        <>
            <section className="all-partner-sec te-pb-80 te-md-pb-55 te-sm-pb-35">
                <div className="container">
                    <div className="row">
                        <div className="partner-carousel-wrap">
                            <Carousel
                                infinite={true}
                                draggable={true}
                                arrows={false}
                                pauseOnHover={false}
                                slidesToSlide={1}
                                showDots={false}
                                swipeable={true}
                                autoPlay={true}
                                autoPlaySpeed={2000}
                                responsive={{
                                    desktop: {
                                        breakpoint: {
                                            max: 3000,
                                            min: 992
                                        },
                                        items: 5,
                                    },
                                    tablet: {
                                        breakpoint: {
                                            max: 991,
                                            min: 577
                                        },
                                        items: 4,
                                    },
                                    mobile: {
                                        breakpoint: {
                                            max: 576,
                                            min: 1
                                        },
                                        items: 2,
                                    }
                                }}>

                                {PartnersData.map(partner =>
                                    <SinglePartner key={partner.id} partner={partner} />
                                )}

                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Partners;
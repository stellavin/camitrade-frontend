import React from 'react';
import getBannerData from '../jsonData/BannerSliderData.json'
import getOfferData from '../jsonData/OfferData.json'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SingleBanner from './SingleBanner';

const BannerSlider = ({hasOffer}) => {

    const CustomRightArrow = ({ onClick }) => {
        return <button className='commonArrow arrowRight' onClick={() => onClick()}><i className="icofont-rounded-right"></i></button>;
    };

    const CustomLeftArrow = ({ onClick }) => {
        return <button className='commonArrow arrowLeft' onClick={() => onClick()}><i className="icofont-rounded-left"></i></button>;

    };

    return (
        <>
            <div className="banner-slider-wrap">
            {hasOffer ? (
                <Carousel
                    infinite={true}
                    draggable={true}
                    arrows={true}
                    pauseOnHover={true}
                    slidesToSlide={1}
                    showDots={false}
                    swipeable={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    transitionDuration={500}
                    keyBoardControl={true}
                    customRightArrow={<CustomRightArrow />}
                    customLeftArrow={<CustomLeftArrow />}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1
                            },
                            items: 1,
                        }
                    }}>

                    {getOfferData.map(banner =>
                        <SingleBanner banner={banner} key={banner.id}  hasOffer/>
                    )}

                </Carousel>
            ):(
                <Carousel
                infinite={true}
                draggable={true}
                arrows={true}
                pauseOnHover={true}
                slidesToSlide={1}
                showDots={false}
                swipeable={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                transitionDuration={500}
                keyBoardControl={true}
                customRightArrow={<CustomRightArrow />}
                customLeftArrow={<CustomLeftArrow />}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1
                        },
                        items: 1,
                    }
                }}>

                {getBannerData.map(banner =>
                    <SingleBanner banner={banner} key={banner.id} />
                )}

            </Carousel>
       
            )}
            </div>
        </>
    );
};

export default BannerSlider;
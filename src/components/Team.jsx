import React from 'react';
import SingleTeam from './SingleTeam';
import TeamData from '../jsonData/TeamData.json'
import Carousel from 'react-multi-carousel';
import TeamTitle from './TeamTitle';

const Team = () => {
    return (
        <>
            <section className="team-sec te-pt-100 te-pb-110 te-md-pt-70 te-md-pb-90 te-sm-pt-40 te-sm-pb-60">
                <div className="container">
                    <TeamTitle />
                    <div className="row">
                        <div className="team-carousel-wrap">
                            <Carousel
                                infinite={true}
                                draggable={true}
                                arrows={false}
                                pauseOnHover={true}
                                slidesToSlide={2}
                                showDots={true}
                                swipeable={true}
                                autoPlay={true}
                                autoPlaySpeed={3000}
                                responsive={{
                                    desktop: {
                                        breakpoint: {
                                            max: 3000,
                                            min: 1200
                                        },
                                        items: 4,
                                    },
                                    laptop: {
                                        breakpoint: {
                                            max: 1199,
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

                                {TeamData.map(team =>
                                    <SingleTeam key={team.id} team={team} />
                                )}

                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Team;
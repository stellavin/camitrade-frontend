import React from 'react';
import teamMember from '/img/team/team-details.jpg'
import { HashLink as Link } from 'react-router-hash-link'
import { Fade } from 'react-reveal';

const TeamMemberDetails = () => {
    return (
        <>
            <section className="all-partner-sec te-pt-100 te-pb-70 te-md-pt-70 te-md-pb-40 te-sm-pt-50 te-sm-pb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <Fade left delay={300}>
                                <div className="team-details-thumb">
                                    <img className="img-fluid" src={teamMember} alt="teamMember" />
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-7">
                            <Fade right delay={500}>
                                <div className="team-details-inner">
                                    <div className="team-details-info">
                                        <h1><span>hi,</span> I am jonson</h1>
                                        <span className="team-details-designation">CEO & Founder of Consultoxer</span>
                                    </div>
                                    <p>We’re on a mission to start a conversation with your customers in this fast connected world. Let’s discover, build and grow your</p>
                                    <ul>
                                        <li><i className="icofont-comment"></i> <a href="mailto:jonsongamil.com">jonsongamil.com</a></li>
                                        <li>
                                            <i className="icofont-telephone"></i>
                                            <a href="tel:000-888-999">000-888-999</a>,
                                            <a href="tel:888-666-444" className='ms-1'>888-666-444</a>
                                        </li>
                                        <li><i className="icofont-google-map"></i>655 Auer Garden Apt. 026, Wolffport, <br />
                                            <span className='te-ml-30'>VA 80438-4929</span>
                                        </li>
                                    </ul>
                                    <div className="contact-me-btn">
                                        <Link to="/contact#" className="theme-btn theme-btn-3 rounded-50">contact me</Link>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-12">
                            <div className="team-details-desc">
                                <Fade bottom delay={300}>
                                    <h2>About me</h2>
                                    <p>Lorem ipsum dolor sit amet, dui dignissim justo nostra et arcu, commodo porta neque diam lectus conubia accumsan. Faucibus aliquam nibh est interdum, tortor amet molestie lectus, eu est lacus, wisi euismod posuere elementum etiam. Nullam nullam elementum phasellus. Hymenaeos iaculis sollicitudin. Mauris fermentum tincidunt duis, molestie tellus, nec condimentum enim tincidunt nulla vestibulum ultricies, neque tempor erat vivamus commodo phasellus neque, aliquet libero. Nibh fusce, ac nunc et vel, et vivamus, leo quis eget placerat at, habitasse est congue. A nisl, vitae leo feugiat urna quam eget, libero aliquet adipiscing mauris elementum lacinia, sodales lectus, nulla diam justo lobortis dolor. Morbi vitae cum</p>
                                </Fade>
                                <Fade bottom delay={500}>
                                    <h2>education</h2>
                                    <p>Lorem ipsum dolor sit amet, dui dignissim justo nostra et arcu, commodo porta neque diam lectus conubia accumsan. Faucibus aliquam nibh est interdum, tortor amet molestie lectus, eu est lacus, wisi euismod posuere elementum etiam. Nullam nullam elementum phasellus. Hymenaeos iaculis sollicitudin. Mauris fermentum tincidunt duis, molestie tellus, nec condimentum enim tincidunt nulla vestibulum ultricies, neque tempor erat vivamus commodo phasellus nequ</p>
                                </Fade>
                                <Fade bottom delay={800}>
                                    <h2>skill</h2>
                                    <p>Lorem ipsum dolor sit amet, dui dignissim justo nostra et arcu, commodo porta neque diam lectus conubia accumsan. Faucibus aliquam nibh est interdum, tortor amet molestie lectus, eu est lacus, wisi euismod posuere elementum etiam. Nullam nullam elementum phasellus. Hymenaeos iaculis sollicitudin. Mauris fermentum tincidunt duis, molestie tellus, nec condimentum enim tincidunt nulla vestibulum ultricies, neque tempor erat vivamus commodo phasellus nequ</p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamMemberDetails;
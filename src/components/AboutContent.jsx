import React from 'react';
import { Fade } from 'react-reveal';

const AboutContent = (props) => {
    const { sign } = props;
    return (
        <>
            <div className="about-desc-modern">
                <div className="about-desc-content">
                    <div className="sec-title-modern">
                        <Fade right delay={200}>
                            <h1 className="what-we-do-title">What We Do</h1>
                            <div className="title-underline"></div>
                        </Fade>
                    </div>
                    <div className="about-text-content">
                        <Fade right delay={300}>
                            <p className="about-text-primary">
                                Camitrade Investment Fiduciaries stands as a beacon of expertise, offering invaluable guidance and exemplary services tailored to the intricate landscape of company incorporation. With a seasoned understanding of diverse industries, we are poised to navigate the complexities of your business's incorporation journey.
                            </p>
                        </Fade>
                        <Fade right delay={500}>
                            <p className="about-text-secondary">
                                Our team is dedicated to providing insightful advice, aiding you in pinpointing the most suitable company type and implementing effective administrative protocols. In an ever-evolving global regulatory environment, we remain steadfast in our commitment to upholding legal compliance, allowing your business to thrive with confidence.
                            </p>
                        </Fade>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutContent;
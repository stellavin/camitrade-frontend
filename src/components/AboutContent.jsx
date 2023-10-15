import React from 'react';
import { Fade } from 'react-reveal';

const AboutContent = (props) => {
    const { sign } = props;
    return (
        <>
            <div className="about-desc">
                <div className="sec-title">
                    <Fade right delay={200}>
                        <h1>What We Do </h1>
                        <p>Camitrade Investment Fiduciaries stands as a beacon of expertise, offering invaluable guidance and exemplary services tailored to the intricate landscape of company incorporation. With a seasoned understanding of diverse industries, we are poised to navigate the complexities of your business's incorporation journey.</p>
                    </Fade>
                </div>
                <Fade right delay={600}>
                    <p> Our team is dedicated to providing insightful advice, aiding you in pinpointing the most suitable company type and implementing effective administrative protocols. In an ever-evolving global regulatory environment, we remain steadfast in our commitment to upholding legal compliance, allowing your business to thrive with confidence.</p>
                </Fade>
            </div>
        </>
    );
};

export default AboutContent;
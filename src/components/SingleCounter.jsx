import React from 'react';
import CountUp from 'react-countup';
import { Fade } from 'react-reveal';

const SingleCounter = ({ counter }) => {
    let { title, start, end, delay } = counter;

    return (
        <>
            <Fade left delay={delay}>
                <div className="col-lg-3 col-md-6 col-sm-6 inner">
                    <div className="counting_sl">
                        <div className="countup-text">
                            <h2 className="counter">
                                <CountUp dalay={3} start={start} end={end} duration={7} />
                            </h2>
                            <h4>{title}</h4>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleCounter;
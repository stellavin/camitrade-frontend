import React from 'react';
import { Fade } from 'react-reveal';

const SingleFaq = ({ faq }) => {
    let { icon, title, text, delay } = faq;

    return (
        <>
            <Fade left delay={delay}>
                <div className="faq-single">
                    <div className="media">
                        {/* <div className="media-left">
                            <div className="icon">
                                <img src={`/img/faq/${icon}`} alt="lightBulb" />
                            </div>
                        </div> */}
                        <div className="media-body">
                            <h2>{title}</h2>
                            <p>{text}</p>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleFaq;
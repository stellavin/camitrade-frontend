import React from 'react';
import SingleFaq from './SingleFaq';
import FaqData from '../jsonData/FaqData.json'
import AboutData from '../jsonData/AboutData.json'
import ImageVideo from './ImageVideo';
import { Fade } from 'react-reveal';

const Faq = (props) => {
    let { bgGray } = props;

    return (
        <>
            <section className={`${bgGray} faq-section faq-style1 te-pt-110 te-pb-75 te-md-pt-80 te-md-pb-90 te-sm-pt-40 te-sm-pb-55`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 ">
                          
                            {props.aboutus ? (
                            <div className="faq-sec">
                            <div className="sec-title">
                                <Fade left delay={200}>
                                    <h1>Who we Are</h1>
                                    <p>
                                    Camitrade Investment Fiduciaries operates in harmony with the dynamic currents of the contemporary global market. Our core focus is on providing tailored incorporation services that seamlessly align with the distinct commercial aspirations of each of our clients. Beyond the initial phase of setting up the right company structure, our expertise extends comprehensively to encompass all facets of company administration. This comprehensive approach ensures that every operational detail is meticulously addressed, setting a solid foundation for business prosperity.</p>
                                    <br></br>

                                    <p>
                                    Our commitment doesn't halt with inception; it persists throughout the entire business lifecycle. We offer meticulous guidance through complex legal procedures, safeguarding our clients' ventures from potential pitfalls. Furthermore, our unwavering support in ensuring continuous compliance with global regulations stands as a testament to our dedication to enduring success. By placing our clients at the pinnacle of our priorities, we transcend the role of mere service providers. Camitrade Investment Fiduciaries thrives on nurturing profound, lasting relationships, fostering transparent communication that allows us to delve into our clients' requirements. This approach not only grants us deep insights but also empowers us to provide a level of service that stands unparalleled in the industry.
                                    </p>
                                </Fade>
                            </div>
                            {AboutData.map(faq =>
                                <SingleFaq faq={faq} key={faq.id} />
                            )}
                        </div>
                            ): (
                                <div className="faq-sec">
                                <div className="sec-title">
                                    <Fade left delay={200}>
                                        <h1>why People Choose <br /> our Company</h1>
                                        <p>Camitrade Investment Fiduciaries specializes in providing expert guidance and services for company incorporation. With a deep understanding of various industries, we assist businesses in navigating the complexities of establishing a legal business entity. Our services include tailored solutions, helping clients select the appropriate company type, implementing effective administrative protocols, and ensuring legal compliance. The company's dedication to maintaining compliance in an evolving global regulatory environment aims to empower businesses to thrive with confidence.</p>
                                    </Fade>
                                </div>
                                {FaqData.map(faq =>
                                    <SingleFaq faq={faq} key={faq.id} />
                                )}
                            </div>

                            )}


                        </div>
                        <div className="col-lg-4 ">
                            <Fade right delay={800}>
                                <ImageVideo />
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Faq;
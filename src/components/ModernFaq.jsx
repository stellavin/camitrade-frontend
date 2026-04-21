import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import { faqItems } from '../data/faqData';

const ModernFaq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = faqItems.map((item, i) => ({ id: i + 1, ...item }));

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <section className="modern-faq-sec te-pt-100 te-pb-100 te-md-pt-70 te-md-pb-70 te-sm-pt-50 te-sm-pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <Fade bottom delay={200}>
                                <div className="sec-title">
                                    <h1>Frequently Asked Questions</h1>
                                    <p className="section-subtitle">
                                        Find answers to common questions about our services, processes, and how we can help your business expand globally.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="modern-faq-list">
                                {faqs.map((faq, index) => (
                                    <Fade bottom delay={300 + (index * 50)} key={faq.id}>
                                        <div className={`modern-faq-item ${openIndex === index ? 'active' : ''}`}>
                                            <div 
                                                className="modern-faq-question" 
                                                onClick={() => toggleFaq(index)}
                                            >
                                                <h3>{faq.question}</h3>
                                                <span className="faq-icon">
                                                    <i className={`icofont-${openIndex === index ? 'minus' : 'plus'}`}></i>
                                                </span>
                                            </div>
                                            <div className={`modern-faq-answer ${openIndex === index ? 'open' : ''}`}>
                                                <p>{faq.answer}</p>
                                            </div>
                                        </div>
                                    </Fade>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ModernFaq;


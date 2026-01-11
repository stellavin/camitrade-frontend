import React, { useState } from 'react';
import { Fade } from 'react-reveal';

const ModernFaq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            id: 1,
            question: "What services does Camitrade provide?",
            answer: "Camitrade provides comprehensive global fiduciary and licensing services including company formation, regulatory licensing, banking solutions, payment processing, trust and foundation services, and ongoing compliance support across 10+ jurisdictions."
        },
        {
            id: 2,
            question: "Which jurisdictions do you operate in?",
            answer: "We operate across multiple jurisdictions including Africa, Europe, the Middle East, and offshore locations. Our expertise spans over 10+ jurisdictions, providing you with access to the most favorable business environments worldwide."
        },
        {
            id: 3,
            question: "How long does company formation take?",
            answer: "Company formation timelines vary by jurisdiction, typically ranging from 1-3 weeks for standard formations. We provide clear timelines during your initial consultation and keep you updated throughout the process."
        },
        {
            id: 4,
            question: "Do you help with banking and payment solutions?",
            answer: "Yes, we provide comprehensive banking and payment solutions including bank account opening assistance, payment processing services, and integration with major card networks like VISA, Mastercard, and others."
        },
        {
            id: 5,
            question: "What types of licenses can you help obtain?",
            answer: "We assist with various licensing needs including financial services licenses, payment services licenses, crypto/VASP licenses, gaming and gambling licenses, insurance licenses, and investment fund licenses across multiple jurisdictions."
        },
        {
            id: 6,
            question: "How do you ensure regulatory compliance?",
            answer: "Our regulatory-first approach ensures all services are compliant with local and international regulations. We maintain up-to-date knowledge of regulatory changes and provide ongoing compliance support to keep your business operating legally."
        },
        {
            id: 7,
            question: "What industries do you specialize in?",
            answer: "We specialize in serving fintech, crypto, banking, insurance, gaming, investment funds, technology companies, and international entrepreneurs seeking global expansion and compliance solutions."
        },
        {
            id: 8,
            question: "Do you provide ongoing support after company formation?",
            answer: "Absolutely. We provide comprehensive ongoing support including corporate secretarial services, compliance monitoring, annual filing assistance, and dedicated relationship management to ensure your business continues to operate smoothly."
        },
        {
            id: 9,
            question: "What is your pricing structure?",
            answer: "Our pricing is transparent and tailored to your specific needs. We provide detailed quotes during your free consultation, with no hidden fees. Pricing varies based on jurisdiction, service complexity, and ongoing support requirements."
        },
        {
            id: 10,
            question: "How do I get started?",
            answer: "Getting started is easy. Simply book a free consultation with our team. We'll assess your needs, discuss your goals, and create a tailored roadmap for your global business expansion. No obligation, completely confidential."
        },
        {
            id: 11,
            question: "Can you help with multi-jurisdictional operations?",
            answer: "Yes, we specialize in multi-jurisdictional operations. Our team coordinates company formations, licensing, and compliance across multiple jurisdictions, ensuring seamless global operations while maintaining regulatory compliance everywhere you operate."
        },
        {
            id: 12,
            question: "What makes Camitrade different from other service providers?",
            answer: "We combine deep regulatory expertise with practical business acumen, offer end-to-end solutions from formation to ongoing compliance, maintain relationships in 10+ jurisdictions, and provide dedicated relationship managers for personalized service."
        }
    ];

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


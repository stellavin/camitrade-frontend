import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const AboutShortText = () => {
    return (
        <>
            <div className="about-us-short">
                <h1>Business & Planning With Task Completion</h1>
                <p>We’re on a mission to start a conversation with your customers in this fast connected world. Let’s discover, build and grow your digital business.It’s a phrase that begins every conversation, and we’d like to start one with you. We love creating digital solutions for all types of</p>
                <ul>
                    <li>Consequat eget vel natoque in duis dui.</li>
                    <li>Mlementum suscipit mollis tellus. Donec tortor</li>
                    <li>Amet commodo urna diam nunc</li>
                </ul>
                <Link to="/project-details#" className="theme-btn theme-btn-1 mt-2">get started</Link>
            </div>
        </>
    );
};

export default AboutShortText;
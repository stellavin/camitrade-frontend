import React from 'react';
import CounterData from '../jsonData/CounterData.json'
import SingleCounter from './SingleCounter';

const HomeTwoCounter = () => {
    return (
        <>
            <div className="home-two-counter">
                <div className="count-up-sec">
                    <div className="count-up-sec-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <div className="sec-title">
                                    <h1>We have 25 years of experience</h1>
                                    <p>We are the leading provider of client solutions with over 10 years of experience helping to find comprehensive solutions for your business.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {CounterData.map(counter =>
                                <SingleCounter counter={counter} key={counter.id} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeTwoCounter;
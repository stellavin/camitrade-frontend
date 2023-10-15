import React from 'react';
import CounterData from '../jsonData/CounterData.json'
import SingleCounter from './SingleCounter';

const Counter = () => {
    return (
        <>
            <section className="count-up-sec">
                <div className="count-up-sec-overlay"></div>
                <div className="container">
                    <div className="row">
                        {CounterData.map(counter =>
                            <SingleCounter counter={counter} key={counter.id} />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Counter;
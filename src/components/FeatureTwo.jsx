import React from 'react';
import SingleFeatureTwo from './SingleFeatureTwo';
import FeatureData from '../jsonData/FeatureData.json'

const FeatureTwo = () => {
    return (
        <>
            <section className="why-choose-us-sec te-pt-100 te-pb-70 te-md-pt-70 te-md-pb-40 te-sm-pt-50 te-sm-pb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 text-center">
                            <div className="sec-title">
                                <h1>Our Global Activities</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {FeatureData.slice(0, 3).map(feature =>
                            <SingleFeatureTwo feature={feature} key={feature.id} />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeatureTwo;
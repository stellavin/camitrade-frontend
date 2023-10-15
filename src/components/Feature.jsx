import React from 'react';
import SingleFeature from './SingleFeature';
import FeatureData from '../jsonData/FeatureData.json'

const Feature = () => {
    return (
        <>
            <section className="feature-sec te-pt-100 te-pb-90 te-md-pt-70 te-md-pb-60 te-sm-pt-40 te-sm-pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="sec-title">
                                <h1>Our Global Services</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {FeatureData.slice(0, 3).map(feature =>
                            <SingleFeature feature={feature} key={feature.id} />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Feature;
import React from 'react';
import FeatureData from '../jsonData/FeatureData.json'
import SingleFeatureH3 from './SingleFeatureH3';

const HomeThreeFeature = () => {
    return (
        <>
            <section className="feature-v3-service-sec te-pb-70 te-md-pb-40 te-sm-pb-20">
                <div className="container">
                    <div className="row">
                        {FeatureData.slice(0, 3).map(feature =>
                            <SingleFeatureH3 feature={feature} key={feature.id} />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeThreeFeature;
import React from 'react';
import meeting from '/img/service/meeting.jpeg'
import casualMeeting from '/img/service/casual-meeting.jpeg'

const ServiceDetailsInfo = ({selectedService}) => {
    return (
        <>
            <div className="service-details-content">
                <div className="service-details-header">
                    <h1 className="service-details-title">{selectedService?.serviceTitle}</h1>
                    <div className="service-details-divider"></div>
                </div>
                <div className="service-details-body">
                    <p className="service-details-text">{selectedService?.serviceText}</p>
                </div>
                {/* <div className="page-details-desc">
                    <h2>Planning & Strategies</h2>
                    <p>Suspendisse sociosqu scelerisque massa est sed, mauris laoreet, vulputate in sit sodales odio, ante mauriaquam. Eget non tortor sed sem lacus, tellus ut enim. Egestas varius consequat euismod penatibus odio, at urna nulla donec curabitur. Sed quam vel ligula litora a at, ultricies natoque ut id neque volutpat, ante dui arcu et, in grida tempor nisl mollis eget. Vitae sed a. Illum vestibulum. Magna ullamcorper.</p>
                </div> */}
                {/* <div className="page-details-desc">
                    <h2>Key Benefits</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="page-details-col">
                                <img className="img-fluid" src={casualMeeting} alt="Meeting" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="page-details-col">
                                <p>elementum interdum amet elementum egestas,fasis eros, massa sed quis rutrum, auctor mattis amet ut in mi, sed mauris. Suspendisse adipiscing bangd jueteyhyewt iuniversity of usa</p>
                                <ul>
                                    <li>Consequat eget vel natoque in duis dui.</li>
                                    <li>Mlementum suscipit mollis tellus. Donec tortor</li>
                                    <li>Amet commodo urna diam nunc</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default ServiceDetailsInfo;
import React from 'react';
import videoThumb from '/img/video/video-thumb.jpeg'

const ImageVideo = () => {
    return (
        <>
            <div className="video-inner">
                <img src={videoThumb} alt="videoThumb" />
                <div className="video-overlay">
                    
                    <span className="video-title"><a target='_blank' href="" className="mfp-iframe">Contact Us</a></span>
                </div>
            </div>
        </>
    );
};

export default ImageVideo;
import React from 'react';
import ClientTestimonialComment from './ClientTestimonialComment';

const SingleTestimonial = ({ testimonial }) => {
    let { img } = testimonial
    return (
        <>
            <div className="single-testimonial">
                {/* <div className="client-thumb">
                    <img src={`/img/testimonial/${img}`} alt="testimonial" />
                </div> */}
                <ClientTestimonialComment testimonial={testimonial} />
            </div>
        </>
    );
};

export default SingleTestimonial;
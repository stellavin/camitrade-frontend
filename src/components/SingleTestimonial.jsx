import React from 'react';
import ClientTestimonialComment from './ClientTestimonialComment';

const SingleTestimonial = ({ testimonial }) => {
    return (
        <>
            <div className="single-testimonial">
                <ClientTestimonialComment testimonial={testimonial} />
            </div>
        </>
    );
};

export default SingleTestimonial;
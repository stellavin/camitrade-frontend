import React from 'react';

const ClientTestimonialComment = ({ testimonial }) => {
    let { name, designation, comment } = testimonial;

    return (
        <>
            <div className="client-comment">
                <p>{comment}</p>
                <div className="client-info">
                    <div className="client-rating">
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                    </div>
                    <h2>{name}</h2>
                    <span className="client-designation">{designation}</span>
                </div>
            </div>
        </>
    );
};

export default ClientTestimonialComment;
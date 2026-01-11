import React from 'react';

const ClientTestimonialComment = ({ testimonial }) => {
    let { name, designation, comment, img } = testimonial;

    return (
        <>
            <div className="client-comment-modern">
                <div className="testimonial-quote-icon">
                    <i className="icofont-quote-left"></i>
                </div>
                <p className="testimonial-text">{comment}</p>
                <div className="client-info-modern">
                    <div className="client-avatar-modern">
                        {img && (
                            <img 
                                src={`/img/testimonial/${img}`} 
                                alt={name} 
                                className="client-avatar-img"
                            />
                        )}
                        {!img && (
                            <div className="client-avatar-placeholder">
                                {name.charAt(0).toUpperCase()}
                            </div>
                        )}
                    </div>
                    <div className="client-details">
                        <div className="client-rating-modern">
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                        </div>
                        <h3 className="client-name-modern">{name}</h3>
                        {designation && (
                            <span className="client-designation-modern">{designation}</span>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClientTestimonialComment;
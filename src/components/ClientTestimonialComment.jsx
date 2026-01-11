import React from 'react';

const ClientTestimonialComment = ({ testimonial }) => {
    let { name, designation, comment } = testimonial;

    // Generate initials from name
    const getInitials = (fullName) => {
        if (!fullName) return '';
        const nameParts = fullName.trim().split(/\s+/);
        if (nameParts.length === 1) {
            return nameParts[0].charAt(0).toUpperCase();
        }
        // Get first letter of first name and first letter of last name
        return (nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)).toUpperCase();
    };

    const initials = getInitials(name);

    return (
        <>
            <div className="client-comment-modern">
                <div className="testimonial-quote-icon">
                    <i className="icofont-quote-left"></i>
                </div>
                <p className="testimonial-text">{comment}</p>
                <div className="client-info-modern">
                    <div className="client-avatar-modern">
                        <div className="client-avatar-placeholder">
                            {initials}
                        </div>
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
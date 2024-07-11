import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import ReactGA from 'react-ga';

// Initialize ReactGA with your Google Analytics tracking ID
ReactGA.initialize('G-PWXX0RHDML');

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleMessage = async (event) => {
        event.preventDefault();

        try {
            // Replace with your actual server endpoint.
            const response = await axios.post('https://radiant-forest-85440-7635edd64cab.herokuapp.com/sendmail', formData);

            if (response.status === 200) {
                toast("Message Sent Successfully");

                // Track the form submission event
                ReactGA.event({
                    category: 'Contact Form',
                    action: 'Submitted Form',
                });

                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            }
        } catch (error) {
            // Handle any errors here (e.g., show an error message).
            console.error('Error sending message:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <>
            <div className="comment-field">
                <h2 className="comment-form-title">Get in touch</h2>
                <form onSubmit={handleMessage} className="commentform">
                    <div className="row form-fields">
                        <p className="comment-author col-md-6">
                            <input
                                placeholder="Name*"
                                type="text"
                                name="name"
                                autoComplete="off"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </p>
                        <p className="author-email col-md-6">
                            <input
                                placeholder="Email Address*"
                                type="email"
                                name="email"
                                autoComplete="off"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </p>
                        <p className="comment-author col-md-12">
                            <input
                                placeholder="Subject*"
                                type="text"
                                name="subject"
                                autoComplete="off"
                                required
                                value={formData.subject}
                                onChange={handleInputChange}
                            />
                        </p>
                    </div>
                    <p className="comment-form">
                        <textarea
                            placeholder="Write Your Message*"
                            name="message"
                            autoComplete="off"
                            cols="20"
                            rows="5"
                            required
                            value={formData.message}
                            onChange={handleInputChange}
                        ></textarea>
                    </p>
                    <p className="form-submit">
                        <button className="theme-btn theme-btn-1" type="submit">
                            Send Message
                        </button>
                    </p>
                </form>
            </div>
        </>
    );
};

export default ContactForm;

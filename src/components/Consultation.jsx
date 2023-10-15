import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import { toast } from 'react-toastify';
import axios from 'axios';

const Consultation = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleMessage = async (event) => {
        event.preventDefault();

        try {
            // Replace 'http://localhost:9000/sendmail' with your server endpoint.
            const response = await axios.post('http://localhost:9000/sendmail', formData);

            if (response.status === 200) {
                toast("Message Sent Successfully");
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
            <div className="consulting-form-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="consulting-form">
                                <div className="consulting-form-title">
                                    <h1>Request a Free Consultation</h1>
                                    <p>Kindly fill out the form, and one of our experts will be in touch with you within the next 24 hours.</p>
                                </div>
                                <Fade left delay={500}>
                                    <form onSubmit={handleMessage}>
                                        <div className="row">
                                            <div className="form-group col-md-12 col-sm-12 input-inner">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Name *"
                                                    autoComplete="on"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group col-md-12 col-sm-12 input-inner">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email Address*"
                                                    autoComplete="on"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group col-md-12 input-inner">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    placeholder="Subject*"
                                                    autoComplete="on"
                                                    required
                                                    value={formData.subject}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <textarea
                                                    placeholder="Request message*"
                                                    name="message"
                                                    autoComplete="on"
                                                    required
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                ></textarea>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <button className='theme-btn theme-btn-1 mt-3' type="submit">
                                                    Send Request
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Consultation;
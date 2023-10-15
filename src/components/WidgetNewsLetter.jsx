import React from 'react';
import { toast } from 'react-toastify';

const WidgetNewsLetter = () => {

    const handleMessage = (event) => {
        event.preventDefault()
        event.target.reset()
        toast("Thanks for your Email")
    }

    return (
        <>
            <div className="widget-newsletter">
                <h2>have any Questions?</h2>
                <form onSubmit={handleMessage}>
                    <input placeholder="your email" type="email" name='email' autoComplete='off' />
                    <button className='theme-btn theme-btn-2-outline'>Send</button>
                </form>
                <a href='tel:2482611651​' className="newsletter-subtitle">Call us +2 (482) 611 651​</a>
            </div>
        </>
    );
};

export default WidgetNewsLetter;
import React, { useEffect, useState } from 'react';

const ScrollUpBtn = () => {
    const [scrollUpButton, setScrollUpButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setScrollUpButton(true);
            } else {
                setScrollUpButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            {scrollUpButton && (
                <button className='customScrollUp' onClick={scrollUp}>
                    <i className="icofont-long-arrow-up"></i>
                </button>
            )}
        </>
    );
};

export default ScrollUpBtn;

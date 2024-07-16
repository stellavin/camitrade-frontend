import React from 'react';

const PreLoader = () => {
    return (
        <>
            <div id="preloader">
                <div id="finaleyas-preloader" className="finaleyas-preloader">
                    <div className="animation-preloader_">
                        <div className="spinner"></div>
                        <div className="txt-loading">
                            <span data-text-preloader="C" className="letters-loading">
                                C
                            </span>
                            <span data-text-preloader="A" className="letters-loading">
                                A
                            </span>
                            <span data-text-preloader="M" className="letters-loading">
                                M
                            </span>
                            <span data-text-preloader="I" className="letters-loading">
                                I
                            </span>
                            <span data-text-preloader="T" className="letters-loading">
                                T
                            </span>
                            <span data-text-preloader="R" className="letters-loading">
                                R
                            </span>
                            <span data-text-preloader="A" className="letters-loading">
                                A
                            </span>
                            <span data-text-preloader="D" className="letters-loading">
                                D
                            </span>
                            <span data-text-preloader="E" className="letters-loading">
                                E
                            </span>
                        </div>
                    </div>
                    <div className="loader">
                        <div className="row">
                            <div className="col-3 loader-section section-left">
                                <div className="bg"></div>
                            </div>
                            <div className="col-3 loader-section section-left">
                                <div className="bg"></div>
                            </div>
                            <div className="col-3 loader-section section-right">
                                <div className="bg"></div>
                            </div>
                            <div className="col-3 loader-section section-right">
                                <div className="bg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PreLoader;
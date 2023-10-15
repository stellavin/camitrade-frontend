import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Breadcrumbs = (props) => {
    const { pageTitle } = props;

    return (
        <>
            <section className="pageheading-sec">
                <div className="breadcrumb-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-heading">
                                <h1>{pageTitle ? pageTitle : "404 Not Found"}</h1>
                            </div>
                            <div className="breadcrumb-list">
                                <ul>
                                    <li><Link to="">Home</Link></li>
                                    <li><Link to="#" className='ms-3'>{pageTitle ? pageTitle : "404 Not Found"}</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Breadcrumbs;
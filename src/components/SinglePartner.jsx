import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SinglePartner = ({ partner }) => {
    let { image } = partner;

    return (
        <>
            <div className="single-partner">
                <Link to="#"><img src={`/img/brands/${image}`} alt="partner" /></Link>
            </div>
        </>
    );
};

export default SinglePartner;
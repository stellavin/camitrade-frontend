import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Pagination = () => {
    return (
        <>
            <div className="col-md-12">
                <div className="pagination custom-pagination">
                    <ul className="pagination custom-pagination">
                        <li className="active"><Link to="#">01</Link></li>
                        <li><Link to="#">02</Link></li>
                        <li><Link to="#">03</Link></li>
                        <li><Link to="#">Next</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Pagination;
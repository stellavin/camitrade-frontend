import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const WidgetTags = () => {
    return (
        <>
            <div className="widget-tag">
                <h1 className="sidebar-widget-title">tags</h1>
                <ul>
                    <li><Link to="#">finace  </Link></li>
                    <li><Link to="#">loan</Link></li>
                    <li><Link to="#">online services </Link></li>
                    <li><Link to="#">agency</Link></li>
                    <li><Link to="#">Accounting</Link></li>
                    <li><Link to="#">cases</Link></li>
                    <li><Link to="#">Consultants</Link></li>
                </ul>
            </div>
        </>
    );
};

export default WidgetTags;
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const WidgetArchive = ({data}) => {
    return (
        <>
            <div className="widget-archive">
                <h1 className="sidebar-widget-title">We Provide Free Zone Company Solutions in the Following Jurisdictions</h1>
                <ul>
                {data && data.map((country, index) => (
                    <li key={index}><Link to="#">{country?.name}: {country?.service}</Link></li>
                ))}
                </ul>
            </div>
        </>
    );
};

export default WidgetArchive;
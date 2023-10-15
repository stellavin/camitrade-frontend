import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const WidgetCategory = ({ selectedService }) => {
    const [openIndex, setOpenIndex] = useState(-1);

    const toggleDiv = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };

    return (
        <>
            <div className="widget-category">
                <h1 className="sidebar-widget-title">Proficient in providing support for the {selectedService?.serviceTitle} across the listed jurisdictions:</h1>
                <ul>
                    {selectedService &&
                        selectedService?.countries?.map((country, index) => (
                            <li key={index}>
                                <div className='btn' onClick={() => toggleDiv(index)} >
                                    {country?.name}: {country?.service}
                                </div>
                                {openIndex === index && (
                                    <div className="toggle-div">
                                        <h1 className="sidebar-widget-title">{country?.serviceDetails?.title}</h1>

                                        <div>{country?.serviceDetails?.serviceDescription}</div>
                                        <br></br>

                                            <h1 className="sidebar-widget-title">Requirements</h1>
                                        <div>{country?.serviceDetails?.reqirementsDescription}</div>
                                        <br></br>
                                        <ol>
                                        {country?.serviceDetails?.reqirements.map((reqirement, index) => (
                                            <li key={index}><Link to="#">{reqirement}</Link></li>
                                        ))}
                                        </ol>
                                        <br></br>

                                        <h1 className="sidebar-widget-title">Key Features</h1>
                                        <div>{country?.serviceDetails?.keyFeaturesDescription}</div>
                                        
                                        <ol>
                                        {country?.serviceDetails?.keyFeatures.map((reqirement, index) => (
                                            <li key={index}><Link to="#">{reqirement}</Link></li>
                                        ))}
                                        </ol>
                                        <br></br>
                                    </div>
                                )}
                            </li>
                        ))}
                </ul>
            </div>
        </>
    );
};

export default WidgetCategory;

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '/img/logo/logo.png'
import CorporateData from '../jsonData/corporateData.json'
import LicensingData from '../jsonData/licensingData.json'
import OtherServiceData from '../jsonData/OtherServicesData.json'
import OffersData from '../jsonData/offersData.json'
import OtherServices from '../jsonData/MainServices';
import { formatServiceId } from '../utils/urlTransform';


const OffCanvasMenu = () => {

    const [iconToggle2, setIconToggle2] = useState(true)

    const location = useLocation();
    const OtherServicesKeys = Object.keys(OtherServices.OtherServices);
    const LicensingDataKeys = Object.keys(OtherServices.LicensingServices);



    return (
        <>
            <Link className="offcanvas-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="icofont-justify-all"></i></Link>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <Link to="/"><img className="small-logo" src={logo} alt="logo" /></Link>
                    <button type="button" className='offcanvasClose' data-bs-dismiss="offcanvas" aria-label="Close"><i className="icofont-close-line"></i></button>
                </div>
                <div className="offcanvas-body">
                    <nav className="navbar">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse show" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    
                                    <li className="nav-item">
                                        <Link to="/#" className={location.pathname === '/#' ? 'nav-link active' : 'nav-link'} >Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about#" className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'} >About</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="/services?id=Corporate#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => setIconToggle2(!iconToggle2)}>
                                        Corporate
                                            {iconToggle2 ? <i className="icofont-plus"></i> : <i className="icofont-minus"></i>}
                                        </Link>
                                        <ul className="dropdown-menu">
                                        {CorporateData.map((service) => (
                                            <li>
                                            <Link 
                                                className={location.pathname === '/services' ? 'dropdown-item active' : 'dropdown-item'} 
                                                to={`/corporate-services/${formatServiceId(service?.id)}`}
                                            >
                                                {service.name}
                                            </Link>
                                        </li>
                                        ))}
                                            
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="/services/Licensing" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => setIconToggle2(!iconToggle2)}>
                                        Licensing
                                            {iconToggle2 ? <i className="icofont-plus"></i> : <i className="icofont-minus"></i>}
                                        </Link>
                                        <ul className="dropdown-menu">
                                        {LicensingData.map((service) => {
                                            console.log('==============',service); // Log the service key

                                            return (
                                                <li key={service}>
                                                    <Link 
                                                        className={location.pathname === '/services' ? 'dropdown-item active' : 'dropdown-item'} 
                                                        to={`/licensing-services/${formatServiceId(service?.id)}`}
                                                    >
                                                        {service.name}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="/services#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => setIconToggle2(!iconToggle2)}>
                                        Other Services
                                            {iconToggle2 ? <i className="icofont-plus"></i> : <i className="icofont-minus"></i>}
                                        </Link>
                                        <ul className="dropdown-menu">
                                        {OtherServiceData.map((service)=> (
                                            <li>
                                            <Link className={location.pathname === '/services' ? 'dropdown-item active' : 'dropdown-item'} to={`/other-services/${formatServiceId(service?.id)}`}>{service.name}</Link>
                                        </li>
                                        ))}
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/jurisdictions#" className={location.pathname === '/jurisdictions' ? 'nav-link active' : 'nav-link'} >Jurisdictions</Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link to="/offers#" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'} >Offers</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/payments#" className={location.pathname === '/payments' ? 'nav-link active' : 'nav-link'} >Payments</Link>
                                    </li>
                                   
                                   
                                    <li className="nav-item">
                                        <Link className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'} to="/contact#">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default OffCanvasMenu;
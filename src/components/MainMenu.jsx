import React, { useEffect, useState } from 'react';
import OffCanvasMenu from './OffCanvasMenu';
import logo from '/img/logo/logo.png'
import { HashLink as Link } from 'react-router-hash-link';
import OtherServices from '../jsonData/MainServices';
import { formatServiceId } from '../utils/urlTransform';

const MainMenu = () => {

    const [isSticky, setIsSticky] = useState(false);

    const OtherServicesKeys = Object.keys(OtherServices.OtherServices);
    const LicensingDataKeys = Object.keys(OtherServices.LicensingServices);
    const CorporateData = Object.keys(OtherServices.CorporateServices);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`hd-sec${isSticky ? ' sticky_menu' : ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-md-3 col-sm-5 col-5">
                            <div className="logo">
                                <Link to="/"><img src={logo} alt="logo" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-9 col-sm-7 col-7">
                            <div className="menu-wrapper d-flex justify-content-end">
                                <div className="nav-menu d-none d-lg-block">
                                    <div className="menu">
                                        <nav id="main-menu" className="main-menu">
                                            <ul>
                                                <li className="active"><Link to="/#">Home</Link></li>
                                                <li><Link to="/about#">about Us</Link></li>
                                                <li className="has-children-menu">
                                                    <Link to="/services/corporate">Corporate</Link>
                                                    <ul>
                                                    {CorporateData.map((service, index)=> (
                                                            <li key={index}>
                                                                <Link to={`/corporate-services/${formatServiceId(service)}`}>
                                                                    {service.replace(/_/g, ' ')}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>

                                                <li className="has-children-menu">
                                                    <Link to="/services/licensing">Licensing</Link>
                                                    <ul>
                                                    {LicensingDataKeys.map((service, index)=> (
                                                            <li key={index}>
                                                                <Link to={`/licensing-services/${formatServiceId(service)}`}>
                                                                    {service.replace(/_/g, ' ')}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    {/* {LicensingDataKeys.map((service, index)=> (
                                                            <li key={index}>
                                                                <Link to={`/licensing-services/${service}`}>
                                                                    {service === 'Brokerage_Forex' ? 'Brokerage/Forex' : service.replace(/_/g, ' ')}
                                                                </Link>
                                                            </li>
                                                        ))} */}
                                                    </ul>
                                                </li>
                                                <li className="has-children-menu">
                                                    <Link to="/services/Other-services">Other services</Link>
                                                    <ul>
                                                        {OtherServicesKeys?.map((service, index)=> (
                                                            <li key={index}>
                                                                <Link to={`/other-services/${service.replace(/_/g, '-')}`}>
                                                                    {service.replace(/_/g, ' ')}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                                <li><Link to="/jurisdictions#">Jurisdictions</Link></li>

                                                <li><Link to="/offers#">Offers</Link></li>
                                               
                                                <li><Link to="/payments#">Payments</Link></li>
                                                {/* <li><Link to="/contact#">Contact</Link></li> */}
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="d-none d-lg-block applay-button-area">
                                    <div className="applay-button">
                                        <Link to="/contact#" className='theme-btn theme-btn-3'>Contact Us</Link>
                                    </div>
                                </div>
                                <div className="offcanvas-menu-area d-lg-none">
                                    <OffCanvasMenu />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainMenu;
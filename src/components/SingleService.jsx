import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import { formatServiceId } from '../utils/urlTransform';

// Icon mapping for corporate services
const getCorporateServiceIcon = (serviceId) => {
    const id = serviceId?.toLowerCase() || '';
    if (id.includes('ibc') || id.includes('company') || id.includes('formation')) {
        return 'icofont-building';
    }
    if (id.includes('agent') || id.includes('registered')) {
        return 'icofont-user-alt-3';
    }
    if (id.includes('trust') || id.includes('foundation')) {
        return 'icofont-shield';
    }
    if (id.includes('nominee') || id.includes('director') || id.includes('shareholder')) {
        return 'icofont-users-alt-5';
    }
    if (id.includes('secretary') || id.includes('secretarial')) {
        return 'icofont-file-alt';
    }
    if (id.includes('accounting') || id.includes('bookkeeping')) {
        return 'icofont-calculator-alt-1';
    }
    if (id.includes('bank') || id.includes('banking')) {
        return 'icofont-bank';
    }
    if (id.includes('office') || id.includes('virtual')) {
        return 'icofont-location-pin';
    }
    return 'icofont-settings';
};

// Highlight badge mapping
const getCorporateServiceHighlight = (serviceId) => {
    const id = serviceId?.toLowerCase() || '';
    if (id.includes('ibc') || id.includes('company')) {
        return 'Company Formation';
    }
    if (id.includes('agent')) {
        return 'Legal Services';
    }
    if (id.includes('trust') || id.includes('foundation')) {
        return 'Asset Protection';
    }
    if (id.includes('nominee')) {
        return 'Compliance';
    }
    if (id.includes('secretary')) {
        return 'Administration';
    }
    if (id.includes('accounting')) {
        return 'Financial Services';
    }
    if (id.includes('bank')) {
        return 'Banking Solutions';
    }
    if (id.includes('office')) {
        return 'Business Solutions';
    }
    return 'Corporate Services';
};

// Icon mapping for licensing services
const getLicensingServiceIcon = (serviceId) => {
    const id = serviceId?.toLowerCase() || '';
    if (id.includes('investment') || id.includes('dealer')) {
        return 'icofont-chart-line';
    }
    if (id.includes('brokerage') || id.includes('forex')) {
        return 'icofont-exchange';
    }
    if (id.includes('gaming') || id.includes('gambling')) {
        return 'icofont-game-controller';
    }
    if (id.includes('insurance')) {
        return 'icofont-shield-alt';
    }
    if (id.includes('payment') || id.includes('psp')) {
        return 'icofont-credit-card';
    }
    if (id.includes('crypto') || id.includes('vasp') || id.includes('virtual asset')) {
        return 'icofont-bitcoin';
    }
    if (id.includes('banking') || id.includes('bank')) {
        return 'icofont-bank';
    }
    if (id.includes('securities')) {
        return 'icofont-chart-growth';
    }
    return 'icofont-certificate-alt-1';
};

// Highlight badge mapping for licensing services
const getLicensingServiceHighlight = (serviceId) => {
    const id = serviceId?.toLowerCase() || '';
    if (id.includes('investment') || id.includes('dealer')) {
        return 'Investment Services';
    }
    if (id.includes('brokerage') || id.includes('forex')) {
        return 'Trading License';
    }
    if (id.includes('gaming') || id.includes('gambling')) {
        return 'Gaming License';
    }
    if (id.includes('insurance')) {
        return 'Insurance License';
    }
    if (id.includes('payment') || id.includes('psp')) {
        return 'Payment Services';
    }
    if (id.includes('crypto') || id.includes('vasp') || id.includes('virtual asset')) {
        return 'Crypto License';
    }
    if (id.includes('banking') || id.includes('bank')) {
        return 'Banking License';
    }
    if (id.includes('securities')) {
        return 'Securities License';
    }
    return 'Licensing Services';
};

// Icon mapping for other services
const getOtherServiceIcon = (serviceId) => {
    const id = serviceId?.toLowerCase() || '';
    if (id.includes('aircraft') || id.includes('ship') || id.includes('registration')) {
        return 'icofont-ship-alt';
    }
    if (id.includes('asset') || id.includes('investment') || id.includes('advisory')) {
        return 'icofont-chart-line';
    }
    if (id.includes('credit') || id.includes('bond')) {
        return 'icofont-file-document';
    }
    if (id.includes('data') || id.includes('reporting')) {
        return 'icofont-file-alt';
    }
    if (id.includes('electronic') || id.includes('money') || id.includes('msb')) {
        return 'icofont-credit-card';
    }
    if (id.includes('fund') || id.includes('management')) {
        return 'icofont-chart-growth';
    }
    if (id.includes('immigration') || id.includes('visa')) {
        return 'icofont-passport';
    }
    if (id.includes('intellectual') || id.includes('property') || id.includes('patent')) {
        return 'icofont-copyright';
    }
    if (id.includes('tax') || id.includes('accounting')) {
        return 'icofont-calculator-alt-1';
    }
    return 'icofont-settings';
};

// Highlight badge mapping for other services
const getOtherServiceHighlight = (serviceId) => {
    const id = serviceId?.toLowerCase() || '';
    if (id.includes('aircraft') || id.includes('ship')) {
        return 'Registration Services';
    }
    if (id.includes('asset') || id.includes('investment') || id.includes('advisory')) {
        return 'Investment Advisory';
    }
    if (id.includes('credit') || id.includes('bond')) {
        return 'Financial Services';
    }
    if (id.includes('data') || id.includes('reporting')) {
        return 'Data Services';
    }
    if (id.includes('electronic') || id.includes('money') || id.includes('msb')) {
        return 'Payment Services';
    }
    if (id.includes('fund') || id.includes('management')) {
        return 'Fund Management';
    }
    if (id.includes('immigration') || id.includes('visa')) {
        return 'Immigration Services';
    }
    if (id.includes('intellectual') || id.includes('property') || id.includes('patent')) {
        return 'IP Services';
    }
    if (id.includes('tax') || id.includes('accounting')) {
        return 'Tax Services';
    }
    return 'Other Services';
};

const SingleService = ({ type, service, index }) => {
    let { serviceIcon, serviceTitle, serviceText, serviceBtn, delay, id, countriesFlags } = service;
    console.log('services-------', service);

    return (
        <>
        { type === 'corporate' ? (
             <Fade bottom delay={300 + (index * 100)}>
             <div className="col-lg-4 col-md-6 col-sm-12">
                 <Link to={`/corporate-services/${formatServiceId(service?.id)}`} className="corporate-service-card-link">
                     <div className="differentiator-card-corporate">
                         <div className="differentiator-card-header">
                             <div className="diff-icon-wrapper">
                                 <i className={getCorporateServiceIcon(service?.id)}></i>
                             </div>
                             <div className="differentiator-number">0{index + 1}</div>
                         </div>
                         <div className="differentiator-card-body">
                             <div className="diff-highlight">{getCorporateServiceHighlight(service?.id)}</div>
                             <h3>{service.title}</h3>
                             <p>{service.intro}</p>
                         </div>
                     </div>
                 </Link>
             </div>
         </Fade>

        ) : type === 'licensing' ? (
            <Fade bottom delay={300 + (index * 100)}>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <Link to={`/licensing-services/${service?.id}`} className="corporate-service-card-link">
                    <div className="differentiator-card-corporate">
                        <div className="differentiator-card-header">
                            <div className="diff-icon-wrapper">
                                <i className={getLicensingServiceIcon(service?.id)}></i>
                            </div>
                            <div className="differentiator-number">0{index + 1}</div>
                        </div>
                        <div className="differentiator-card-body">
                            <div className="diff-highlight">{getLicensingServiceHighlight(service?.id)}</div>
                            <h3>{service.title || service.name}</h3>
                            <p>{service.text}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </Fade>

        ) : type === 'other-services' ?(
            <Fade bottom delay={300 + (index * 100)}>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <Link to={`/other-services/${service?.id}`} className="corporate-service-card-link">
                    <div className="differentiator-card-corporate">
                        <div className="differentiator-card-header">
                            <div className="diff-icon-wrapper">
                                <i className={getOtherServiceIcon(service?.id)}></i>
                            </div>
                            <div className="differentiator-number">0{index + 1}</div>
                        </div>
                        <div className="differentiator-card-body">
                            <div className="diff-highlight">{getOtherServiceHighlight(service?.id)}</div>
                            <h3>{service.title || service.name}</h3>
                            <p>{service.text}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </Fade>
        ): (
            <></>
        )
        }
        </>
    );
};

export default SingleService;
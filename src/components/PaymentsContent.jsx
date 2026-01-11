import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

const PaymentsContent = (props) => {
    let { bgGray } = props;
    const navigate = useNavigate();

    const pspServices = [
        {
            name: "Zambia Payments Systems Business License",
            id: "zambia-payments-systems-business-license",
            description: "Regulated by the Bank of Zambia (BoZ) under the National Payment System Act 2007 (NPSA). Authorises entities to provide money transfer or transmission services, or any other payment systems business prescribed by the BoZ.",
            icon: "icofont-credit-card"
        },
        {
            name: "Nigeria Payment Solution Service Provider (PSSP) License",
            id: "nigeria-payment-solution-service-provider-pssp-license",
            description: "Regulatory authorization issued by the Central Bank of Nigeria (CBN) under the Payment Solution Services (PSSs) framework. Enables holders to operate in the payments ecosystem as per the CBN Act 2007 and BOFIA 1991 (as amended).",
            icon: "icofont-globe-alt"
        }
    ];

    const paymentSolutions = [
        {
            icon: 'icofont-credit-card',
            title: 'Card Collection & Acquiring',
            description: 'Online card collection and merchant acquiring services through trusted global partners'
        },
        {
            icon: 'icofont-exchange',
            title: 'Domestic & International Payouts',
            description: 'Efficient domestic and international payout solutions for global businesses'
        },
        {
            icon: 'icofont-code-alt',
            title: 'API-Enabled Integrations',
            description: 'Flexible API connections for seamless payment infrastructure integration'
        },
        {
            icon: 'icofont-mobile-phone',
            title: 'Region-Specific Methods',
            description: 'Mobile money, QR codes, and cash-based payment solutions tailored to local markets'
        },
        {
            icon: 'icofont-money',
            title: 'Multi-Currency Settlement',
            description: 'Support for multiple currencies with efficient settlement options'
        }
    ];

    const cardNetworks = [
        'VISA', 'Mastercard', 'American Express', 'Diners Club', 'Discover', 'JCB'
    ];

    const industries = [
        'Forex and financial services',
        'Gaming and gambling (where permitted by law)',
        'Export and import businesses',
        'Oil and energy sector',
        'Pharmaceuticals and healthcare',
        'E-commerce and online education',
        'Travel and hospitality',
        'Consumer goods and retail'
    ];

    const handlePSPClick = (id) => {
        navigate(`/psp-services/${id}`);
    };

    const southAmericaData = [
        { country: 'Chile', paymentMethods: ['Online', 'Cash', 'QR Code'] },
        { country: 'Brazil', paymentMethods: ['Online', 'Cash', 'QR Code'] },
        { country: 'Ecuador', paymentMethods: ['Online', 'Cash', 'QR Code'] },
        { country: 'Panama', paymentMethods: ['Cash'] },
        { country: 'Peru', paymentMethods: ['Online', 'Cash', 'Loan Money'] },
        { country: 'Costa Rica', paymentMethods: ['Online', 'Cash'] },
        { country: 'Mexico', paymentMethods: ['Online', 'Cash'] },
        { country: 'Columbia', paymentMethods: ['Online', 'Cash'] },
        { country: 'Guatemala', paymentMethods: ['Cash'] },
    ];

    const africaData = [
        { country: 'Kenya', paymentMethods: ['Mobile Money'] },
        { country: 'Uganda', paymentMethods: ['Mobile Money'] },
        { country: 'Tanzania', paymentMethods: ['Mobile Money'] },
        { country: 'Ghana', paymentMethods: ['Mobile Money'] },
        { country: 'Rwanda', paymentMethods: ['Mobile Money'] },
    ];

    return (
        <>
            {/* Hero / Intro Section - Corporate Style */}
            <section className="who-is-camitrade-sec te-pt-100 te-pb-100 te-md-pt-70 te-md-pb-70 te-sm-pt-50 te-sm-pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 text-center">
                            <Fade bottom delay={200}>
                                <div className="sec-title corporate-title">
                                    <span className="section-label">Payment Solutions</span>
                                    <h1>Payment Solutions for Merchants</h1>
                                    <p className="section-subtitle">
                                        <strong>Camitrade Investment Fiduciaries provides secure, compliant payment solutions for merchants operating across multiple jurisdictions.</strong> We help businesses access <strong>card collection, payouts, and region-specific payment methods</strong> through a global network of regulated payment partners.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Payment Solutions - Card Grid Style */}
            <section className="feature-sec-modern te-pt-100 te-pb-100 te-md-pt-70 te-md-pb-70 te-sm-pt-50 te-sm-pb-50" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <Fade bottom delay={200}>
                                <div className="sec-title">
                                    <span className="section-label">Our Services</span>
                                    <h2>What Payment Solutions Does Camitrade Offer?</h2>
                                    <p className="section-subtitle">
                                        Camitrade helps merchants access comprehensive payment infrastructure through trusted global partners
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="row g-4" style={{ marginTop: '50px' }}>
                        {paymentSolutions.map((solution, index) => (
                            <Fade bottom delay={300 + (index * 100)} key={index}>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="feature-card-modern" style={{ height: '100%' }}>
                                        <div className="feature-content-modern">
                                            <div className="feature-icon-modern">
                                                <i className={solution.icon} style={{ fontSize: '48px', color: '#007693' }}></i>
                                            </div>
                                            <div className="feature-header-modern">
                                                <h3 className="feature-title-modern">{solution.title}</h3>
                                            </div>
                                            <p className="feature-text-modern">{solution.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            </section>

            {/* Card Collection & Payouts - Two Column Layout */}
            <section className="who-is-camitrade-sec te-pt-100 te-pb-100 te-md-pt-70 te-md-pb-70 te-sm-pt-50 te-sm-pb-50">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                            <Fade left delay={200}>
                                <div className="who-is-camitrade-content">
                                    <div className="sec-title">
                                        <span className="section-label">Payment Infrastructure</span>
                                        <h2>Card Collection and Payouts</h2>
                                        <div className="title-underline-camitrade"></div>
                                    </div>
                                    <div className="who-is-camitrade-text">
                                        <p className="who-is-text-primary">
                                            Camitrade assists merchants in acquiring <strong>card collection and payout capabilities</strong> through advanced, API-enabled payment infrastructure. Our solutions enable businesses to <strong>accept payments globally and settle funds efficiently</strong>, regardless of where customers or merchants are located.
                                        </p>
                                        <p className="who-is-text-secondary">
                                            The creation of cards has typically been country-specific, leading to a variety of systems innovation worldwide. However, as technology has advanced, compatibility has increased, facilitating global money transfers through flexible Application Programming Interface (API) connections.
                                        </p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <Fade right delay={400}>
                                <div className="who-is-camitrade-image">
                                    <div className="who-is-image-wrapper">
                                        <div style={{ 
                                            background: 'linear-gradient(135deg, #007693 0%, #00a8cc 100%)', 
                                            borderRadius: '15px',
                                            padding: '60px 40px',
                                            textAlign: 'center',
                                            minHeight: '400px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <i className="icofont-credit-card" style={{ fontSize: '80px', color: '#fff', marginBottom: '30px' }}></i>
                                            <h3 style={{ color: '#fff', marginBottom: '20px' }}>Global Payment Network</h3>
                                            <p style={{ color: '#fff', fontSize: '16px', lineHeight: '1.8' }}>
                                                Seamless integration with international payment systems
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>

            {/* Supported Card Networks - Icon Grid */}
            <section className="why-choose-us-modern te-pt-100 te-pb-100 te-md-pt-70 te-md-pb-70 te-sm-pt-50 te-sm-pb-50" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 text-center">
                            <Fade bottom delay={200}>
                                <div className="sec-title corporate-title">
                                    <span className="section-label">Payment Networks</span>
                                    <h2>Supported Card Networks</h2>
                                    <p className="section-subtitle">
                                        Through our global payment partners, Camitrade supports merchant access to the following international card networks
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="row g-4" style={{ marginTop: '50px' }}>
                        {cardNetworks.map((network, index) => (
                            <Fade bottom delay={300 + (index * 100)} key={index}>
                                <div className="col-lg-2 col-md-4 col-sm-6">
                                    <div className="differentiator-card-corporate" style={{ textAlign: 'center', padding: '30px 20px' }}>
                                        <div className="diff-icon-wrapper" style={{ marginBottom: '15px' }}>
                                            <i className="icofont-credit-card" style={{ fontSize: '40px', color: '#007693' }}></i>
                                        </div>
                                        <h3 style={{ fontSize: '16px', margin: 0, color: '#212836' }}>{network}</h3>
                                    </div>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            </section>

            {/* Payment Methods by Region - Tables in Cards */}
            <section className="who-is-camitrade-sec te-pt-100 te-pb-100 te-md-pt-70 te-md-pb-70 te-sm-pt-50 te-sm-pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 text-center">
                            <Fade bottom delay={200}>
                                <div className="sec-title corporate-title">
                                    <span className="section-label">Regional Coverage</span>
                                    <h2>Payment Methods by Region</h2>
                                    <p className="section-subtitle">
                                        Payment methods vary by country and jurisdiction. Camitrade helps merchants access <strong>locally preferred payment channels</strong>, improving acceptance rates and customer trust.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="row g-4" style={{ marginTop: '50px' }}>
                        <div className="col-lg-6">
                            <Fade bottom delay={300}>
                                <div className="feature-card-modern" style={{ height: '100%' }}>
                                    <div className="feature-content-modern">
                                        <div className="feature-icon-modern">
                                            <i className="icofont-globe" style={{ fontSize: '48px', color: '#007693' }}></i>
                                        </div>
                                        <div className="feature-header-modern">
                                            <h3 className="feature-title-modern">South America Payment Methods</h3>
                                        </div>
                                        <p className="feature-text-modern" style={{ marginBottom: '25px' }}>
                                            In South America, merchants typically rely on a mix of <strong>online payments, cash-based methods, QR codes, and local financing options</strong>.
                                        </p>
                                        <div className="table-container" style={{ overflowX: 'auto' }}>
                                            <table className="custom-table" style={{ width: '100%' }}>
                                                <thead>
                                                    <tr>
                                                        <th>Country</th>
                                                        <th>Payment Methods</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {southAmericaData.map((item, index) => (
                                                        <tr key={index}>
                                                            <td><strong>{item.country}</strong></td>
                                                            <td>
                                                                {item.paymentMethods.join(', ')}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>

                        <div className="col-lg-6">
                            <Fade bottom delay={400}>
                                <div className="feature-card-modern" style={{ height: '100%' }}>
                                    <div className="feature-content-modern">
                                        <div className="feature-icon-modern">
                                            <i className="icofont-globe" style={{ fontSize: '48px', color: '#007693' }}></i>
                                        </div>
                                        <div className="feature-header-modern">
                                            <h3 className="feature-title-modern">Africa Payment Methods</h3>
                                        </div>
                                        <p className="feature-text-modern" style={{ marginBottom: '25px' }}>
                                            In many African countries, <strong>mobile money</strong> is the primary payment method for consumers and businesses.
                                        </p>
                                        <div className="table-container" style={{ overflowX: 'auto' }}>
                                            <table className="custom-table" style={{ width: '100%' }}>
                                                <thead>
                                                    <tr>
                                                        <th>Country</th>
                                                        <th>Payment Methods</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {africaData.map((item, index) => (
                                                        <tr key={index}>
                                                            <td><strong>{item.country}</strong></td>
                                                            <td>{item.paymentMethods.join(', ')}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Supported - List in Card */}
            <section className="why-choose-us-modern te-pt-100 te-pb-100 te-md-pt-70 te-md-pb-70 te-sm-pt-50 te-sm-pb-50" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 text-center">
                            <Fade bottom delay={200}>
                                <div className="sec-title corporate-title">
                                    <span className="section-label">Industry Support</span>
                                    <h2>Industries and Enterprises Supported</h2>
                                    <p className="section-subtitle">
                                        Camitrade supports payment solutions for <strong>legal and regulated enterprises</strong>, ensuring compliance with applicable laws and regulatory frameworks.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: '50px' }}>
                        <div className="col-lg-10 offset-lg-1">
                            <Fade bottom delay={300}>
                                <div className="feature-card-modern">
                                    <div className="feature-content-modern">
                                        <div className="row g-3">
                                            {industries.map((industry, index) => (
                                                <div key={index} className="col-lg-6 col-md-6">
                                                    <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px' }}>
                                                        <i className="icofont-check-circled" style={{ fontSize: '20px', color: '#007693', marginRight: '10px', marginTop: '3px' }}></i>
                                                        <span style={{ fontSize: '16px', lineHeight: '1.8', color: '#4d4d4e' }}>{industry}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <p style={{ marginTop: '30px', fontSize: '16px', fontStyle: 'italic', color: '#666', textAlign: 'center' }}>
                                            All supported businesses must operate within applicable laws and regulatory frameworks.
                                        </p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compliance & Security */}
            <section className="who-is-camitrade-sec te-pt-100 te-pb-100 te-md-pt-70 te-md-pb-70 te-sm-pt-50 te-sm-pb-50">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                            <Fade left delay={200}>
                                <div className="who-is-camitrade-content">
                                    <div className="sec-title">
                                        <span className="section-label">Security & Compliance</span>
                                        <h2>Compliance and Security</h2>
                                        <div className="title-underline-camitrade"></div>
                                    </div>
                                    <div className="who-is-camitrade-text">
                                        <p className="who-is-text-primary">
                                            Camitrade prioritizes <strong>regulatory compliance, transaction security, and partner due diligence</strong> in all payment solutions. We work exclusively with vetted payment providers to ensure merchant operations align with applicable financial and regulatory requirements.
                                        </p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <Fade right delay={400}>
                                <div className="who-is-camitrade-image">
                                    <div className="who-is-image-wrapper">
                                        <div style={{ 
                                            background: 'linear-gradient(135deg, #007693 0%, #00a8cc 100%)', 
                                            borderRadius: '15px',
                                            padding: '60px 40px',
                                            textAlign: 'center',
                                            minHeight: '350px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <i className="icofont-shield" style={{ fontSize: '80px', color: '#fff', marginBottom: '30px' }}></i>
                                            <h3 style={{ color: '#fff', marginBottom: '20px' }}>Regulatory Compliance First</h3>
                                            <p style={{ color: '#fff', fontSize: '16px', lineHeight: '1.8' }}>
                                                All payment solutions comply with applicable financial regulations
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>

            {/* PSP Services Section - Corporate Cards */}
            <section className="feature-sec-modern te-pt-100 te-pb-100 te-md-pt-70 te-md-pb-70 te-sm-pt-50 te-sm-pb-50" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 text-center">
                            <Fade bottom delay={200}>
                                <div className="sec-title corporate-title">
                                    <span className="section-label">Licensing Services</span>
                                    <h2>Payment Service Provider (PSP) Licensing Services</h2>
                                    <p className="section-subtitle">
                                        Camitrade Investment Fiduciaries offers comprehensive Payment Service Provider (PSP) licensing solutions across multiple jurisdictions. We assist businesses in obtaining PSP licenses to operate payment systems, money transfer services, and payment solutions globally.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="row g-4" style={{ marginTop: '50px' }}>
                        {pspServices.map((service, index) => (
                            <Fade bottom delay={300 + (index * 100)} key={index}>
                                <div className="col-lg-6 col-md-6">
                                    <div 
                                        className="feature-card-modern" 
                                        onClick={() => handlePSPClick(service.id)}
                                        style={{ 
                                            cursor: 'pointer',
                                            height: '100%',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <div className="feature-content-modern">
                                            <div className="feature-icon-modern">
                                                <i className={service.icon} style={{ fontSize: '48px', color: '#007693' }}></i>
                                            </div>
                                            <div className="feature-header-modern">
                                                <h3 className="feature-title-modern">{service.name}</h3>
                                            </div>
                                            <p className="feature-text-modern">{service.description}</p>
                                            <Link 
                                                to={`/psp-services/${service.id}`}
                                                className="feature-cta-modern"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handlePSPClick(service.id);
                                                }}
                                            >
                                                Learn More
                                                <span className="feature-cta-arrow">
                                                    <i className="icofont-arrow-right"></i>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Corporate Style */}
            <section className="who-is-camitrade-sec te-pt-100 te-pb-100 te-md-pt-70 te-md-pb-70 te-sm-pt-50 te-sm-pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <Fade bottom delay={200}>
                                <div className="sec-title corporate-title">
                                    <h2>Need a Payment Solution for Your Business?</h2>
                                    <p className="section-subtitle">
                                        Speak with a Camitrade advisor to discuss compliant payment options tailored to your jurisdiction and industry.
                                    </p>
                                </div>
                                <div className="who-is-cta-buttons" style={{ marginTop: '40px' }}>
                                    <Link to="/contact" className="who-is-cta-btn-primary">
                                        Speak to a Payments Advisor
                                    </Link>
                                    <Link to="/contact" className="who-is-cta-btn-secondary">
                                        Book a Free Consultation
                                    </Link>
                                </div>
                                <p style={{ marginTop: '30px', fontSize: '14px', color: '#666', fontStyle: 'italic' }}>
                                    Confidential • Jurisdiction-aware • Compliance-first
                                </p>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section - Modern Accordion Style */}
            <section className="why-choose-us-modern te-pt-100 te-pb-100 te-md-pt-70 te-md-pb-70 te-sm-pt-50 te-sm-pb-50" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 text-center">
                            <Fade bottom delay={200}>
                                <div className="sec-title corporate-title">
                                    <span className="section-label">Common Questions</span>
                                    <h2>Frequently Asked Questions</h2>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: '50px' }}>
                        <div className="col-lg-10 offset-lg-1">
                            <Fade bottom delay={300}>
                                <div className="feature-card-modern">
                                    <div className="feature-content-modern">
                                        <div style={{ textAlign: 'left' }}>
                                            <div style={{ marginBottom: '30px', paddingBottom: '25px', borderBottom: '1px solid #e0e0e0' }}>
                                                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#007693' }}>
                                                    What payment solutions does Camitrade offer?
                                                </h3>
                                                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#4d4d4e', margin: 0 }}>
                                                    Camitrade offers comprehensive payment solutions including online card collection, merchant acquiring, domestic and international payouts, API-enabled integrations, and region-specific payment methods through our global network of regulated payment partners.
                                                </p>
                                            </div>
                                            <div style={{ marginBottom: '30px', paddingBottom: '25px', borderBottom: '1px solid #e0e0e0' }}>
                                                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#007693' }}>
                                                    Does Camitrade support card payments?
                                                </h3>
                                                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#4d4d4e', margin: 0 }}>
                                                    Yes, Camitrade supports card payments through major international card networks including VISA, Mastercard, American Express, Diners Club, Discover, and JCB via our global payment partners.
                                                </p>
                                            </div>
                                            <div style={{ marginBottom: '30px', paddingBottom: '25px', borderBottom: '1px solid #e0e0e0' }}>
                                                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#007693' }}>
                                                    Which countries are supported for payment processing?
                                                </h3>
                                                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#4d4d4e', margin: 0 }}>
                                                    Camitrade supports payment processing across multiple jurisdictions, including countries in South America (Chile, Brazil, Ecuador, Panama, Peru, Costa Rica, Mexico, Colombia, Guatemala) and Africa (Kenya, Uganda, Tanzania, Ghana, Rwanda), with region-specific payment methods tailored to local preferences.
                                                </p>
                                            </div>
                                            <div style={{ marginBottom: '30px', paddingBottom: '25px', borderBottom: '1px solid #e0e0e0' }}>
                                                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#007693' }}>
                                                    Does Camitrade support mobile money?
                                                </h3>
                                                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#4d4d4e', margin: 0 }}>
                                                    Yes, Camitrade supports mobile money payments, particularly in African markets where it is the primary payment method. We help merchants access mobile money solutions through our regional payment partners.
                                                </p>
                                            </div>
                                            <div style={{ marginBottom: '0' }}>
                                                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#007693' }}>
                                                    Is payment processing compliant with regulations?
                                                </h3>
                                                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#4d4d4e', margin: 0 }}>
                                                    Yes, Camitrade prioritizes regulatory compliance and transaction security. We work exclusively with vetted payment providers and ensure all merchant operations align with applicable financial and regulatory requirements in each jurisdiction.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Links - Corporate Footer Style */}
            <section className="te-pt-50 te-pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <Fade bottom delay={200}>
                                    <p style={{ fontSize: '16px', color: '#666', marginBottom: '20px', fontWeight: '600' }}>
                                        Related Services
                                    </p>
                                    <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                        <Link to="/licensing-services" style={{ color: '#007693', textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>
                                            Licensing Services <i className="icofont-arrow-right"></i>
                                        </Link>
                                        <Link to="/jurisdictions" style={{ color: '#007693', textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>
                                            Jurisdictions <i className="icofont-arrow-right"></i>
                                        </Link>
                                        <Link to="/corporate-services" style={{ color: '#007693', textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>
                                            Corporate Services <i className="icofont-arrow-right"></i>
                                        </Link>
                                        <Link to="/contact" style={{ color: '#007693', textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>
                                            Contact Us <i className="icofont-arrow-right"></i>
                                        </Link>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PaymentsContent;

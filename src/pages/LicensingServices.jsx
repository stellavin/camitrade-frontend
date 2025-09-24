import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import LicensingServiceList from '../components/LicensingServiceList';
import CanonicalHeaders from '../components/CanonicalHeaders';
import servicesData from '../jsonData/MainServices';

const LicensingServices = () => {
    const { id } = useParams();
    const [serviceName, setServiceName] = useState('Licensing Services');
    const [serviceData, setServiceData] = useState(null);
    
    const toSentenceCase = (str) => {
        return str.replace(/_/g, " ")
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    // Find specific service data based on URL parameter
    useEffect(() => {
        if (id) {
            const services = servicesData.LicensingServices;
            
            // Normalize the service ID to match the data structure
            const serviceId = id
                ?.replace(/-/g, '_')
                ?.replace(/\([^)]*\)/g, '')
                ?.replace(/\s+/g, '_')
                ?.replace(/_+/g, '_')
                ?.toLowerCase();
            
            // Search through all service categories
            for (const [categoryKey, serviceList] of Object.entries(services)) {
                if (Array.isArray(serviceList)) {
                    const foundService = serviceList.find(service => 
                        service.id === id || service.id === serviceId
                    );
                    if (foundService) {
                        setServiceData(foundService);
                        setServiceName(foundService.Service);
                        break;
                    }
                }
            }
        }
    }, [id]);

    // Generate SEO title and description
    const getSEOTitle = () => {
        if (serviceData) {
            // Special optimization for Seychelles Securities Dealer License
            if (serviceData.Service === "Seychelles Securities Dealer Licence") {
                return "Seychelles Securities Dealer License - Trading License with $50K Capital";
            }
            // Special optimization for Mauritius Payment Intermediary Service License
            if (serviceData.Service === "Mauritius Payment Intermediary Service License") {
                return "Mauritius Payment Intermediary Service License - PSP License with 3% Tax Rate";
            }
            // Special optimization for Mauritius Virtual Asset Service Provider License
            if (serviceData.Service === "Mauritius Virtual Asset Service Provider License") {
                return "Mauritius VASP License 2025 | Crypto Exchange License | FSC Regulated";
            }
            // Special optimization for Seychelles Virtual Asset Service Provider License
            if (serviceData.Service === "Seychelles Virtual Asset Service Provider License") {
                return "Seychelles VASP License 2025 | Crypto Exchange License | FSA Regulated";
            }
            // Special optimization for Kenya Non Dealing Online Foreign Exchange License
            if (serviceData.Service === "Kenya Capital Markets Securities Licenses (Non-Dealing Online Foreign Exchange Broker License)") {
                return "Kenya Forex Broker License 2025 | Non Dealing Online FX License | CMA Regulated";
            }
            // Special optimization for Labuan Money Broking License
            if (serviceData.Service === "Labuan Money Broking License") {
                return "Labuan Money Broking License 2025 | Forex Broker License | Labuan FSA Regulated";
            }
            // Special optimization for Vanuatu Securities Dealer License
            if (serviceData.Service === "Vanuatu Securities Dealer License") {
                return "Vanuatu Securities Dealer License 2025 | Securities Trading License | VFSC Regulated";
            }
            // Special optimization for Seychelles International Business Company
            if (serviceData.Service === "Seychelles International Business Company (IBC)") {
                return "Seychelles IBC Registration 2025 | International Business Company | Zero Tax";
            }
            // Special optimization for BVI International Business Company
            if (serviceData.Service === "British Virgin Islands International Business Company (IBC)") {
                return "BVI IBC Registration 2025 | International Business Company | Premier Offshore";
            }
            return `${serviceData.Service} | Expert Licensing Solutions - Camitrade`;
        }
        return `${toSentenceCase(serviceName)} | Expert Licensing Solutions`;
    };

    const getSEODescription = () => {
        if (serviceData) {
            // Special optimization for Seychelles Securities Dealer License
            if (serviceData.Service === "Seychelles Securities Dealer Licence") {
                return "Seychelles Securities Dealer License for trading operations. $50K capital requirement, 30-day processing. Trade stocks, bonds, forex, and cryptocurrencies globally.";
            }
            // Special optimization for Mauritius Payment Intermediary Service License
            if (serviceData.Service === "Mauritius Payment Intermediary Service License") {
                return "Mauritius Payment Intermediary Service License for PSP operations. 3% tax rate, MUR 500K capital requirement. Process payments, cards, and remittance services globally.";
            }
            // Special optimization for Mauritius Virtual Asset Service Provider License
            if (serviceData.Service === "Mauritius Virtual Asset Service Provider License") {
                return "Mauritius VASP License for crypto exchanges and digital asset services. FSC regulated, clear framework for virtual assets. Operate crypto, DeFi, NFT services globally.";
            }
            // Special optimization for Seychelles Virtual Asset Service Provider License
            if (serviceData.Service === "Seychelles Virtual Asset Service Provider License") {
                return "Seychelles VASP License for crypto exchanges and digital asset services. FSA regulated, progressive framework for virtual assets. Operate crypto, DeFi, NFT services globally.";
            }
            // Special optimization for Kenya Non Dealing Online Foreign Exchange License
            if (serviceData.Service === "Kenya Capital Markets Securities Licenses (Non-Dealing Online Foreign Exchange Broker License)") {
                return "Kenya Forex Broker License for online foreign exchange trading. CMA regulated, 1:400 leverage, KES 30M capital requirement. Operate forex trading platforms in East Africa.";
            }
            // Special optimization for Labuan Money Broking License
            if (serviceData.Service === "Labuan Money Broking License") {
                return "Labuan Money Broking License for forex and money market operations. Labuan FSA regulated, 3% tax rate, RM 500K capital requirement. Operate money broking services in Asia.";
            }
            // Special optimization for Vanuatu Securities Dealer License
            if (serviceData.Service === "Vanuatu Securities Dealer License") {
                return "Vanuatu Securities Dealer License for securities trading and forex operations. VFSC regulated, $50K capital requirement, 20-year tax exemption. Operate securities dealing in Pacific region.";
            }
            // Special optimization for Seychelles International Business Company
            if (serviceData.Service === "Seychelles International Business Company (IBC)") {
                return "Seychelles IBC registration for international business operations. Zero corporate tax, unparalleled privacy, 1-day incorporation. Register international business company in Seychelles.";
            }
            // Special optimization for BVI International Business Company
            if (serviceData.Service === "British Virgin Islands International Business Company (IBC)") {
                return "BVI IBC registration for international business operations. Premier offshore jurisdiction, zero corporate tax, 2-day incorporation. Register international business company in BVI.";
            }
            // Create a more specific description for other services (optimized for 150-160 chars)
            return `Expert ${serviceData.Service} guidance. 100% compliant, 30-45 day processing. Get licensed with Camitrade's professional support.`;
        }
        return `Expert ${toSentenceCase(serviceName)} guidance. Fast, reliable service with 100% compliance. Professional support available.`;
    };

    return (
        <>
         <CanonicalHeaders
               title={getSEOTitle()}
               description={getSEODescription()}
            />
            <Header />
            <Breadcrumbs pageTitle={toSentenceCase(serviceName)}/>
            <LicensingServiceList handleSetName={setServiceName}/>
            <Footer />
        </>
    );
};

export default LicensingServices;
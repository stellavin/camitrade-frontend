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
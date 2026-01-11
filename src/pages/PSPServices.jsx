import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import PSPServiceList from '../components/PSPServiceList';
import CanonicalHeaders from '../components/CanonicalHeaders';
import Consultation from '../components/Consultation';
import servicesData from '../jsonData/MainServices';

const PSPServices = () => {
    const { id } = useParams();
    const [serviceName, setServiceName] = useState('PSP Services');
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
            const services = servicesData.PSPServices;
            
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
            // Special optimization for Zambia Payments Systems Business License
            if (serviceData.Service === "Zambia Payments Systems Business License") {
                return "Zambia Payments Systems Business License | PSP License | BoZ Regulated";
            }
            // Special optimization for Nigeria Payment Solution Service Provider License
            if (serviceData.Service === "Nigeria Payment Solution Service Provider (PSSP) License") {
                return "Nigeria PSSP License | Payment Solution Service Provider | CBN Regulated";
            }
            return `${serviceData.Service} | Expert PSP Licensing Solutions - Camitrade`;
        }
        return `${toSentenceCase(serviceName)} | Expert PSP Licensing Solutions`;
    };

    const getSEODescription = () => {
        if (serviceData) {
            // Special optimization for Zambia Payments Systems Business License
            if (serviceData.Service === "Zambia Payments Systems Business License") {
                return "Zambia Payments Systems Business License for payment system business operations. BoZ regulated, NPSA 2007 compliant. Operate money transfer, payment systems, and remittance services in Zambia.";
            }
            // Special optimization for Nigeria Payment Solution Service Provider License
            if (serviceData.Service === "Nigeria Payment Solution Service Provider (PSSP) License") {
                return "Nigeria PSSP License for payment solution service provider operations. CBN regulated, PSS framework compliant. Operate payment processing, payment gateway, and innovative payment solutions in Nigeria.";
            }
            // Create a more specific description for other services (optimized for 150-160 chars)
            return `Expert ${serviceData.Service} guidance. 100% compliant, fast processing. Get licensed with Camitrade's professional support.`;
        }
        return `Expert ${toSentenceCase(serviceName)} guidance. Fast, reliable service with 100% compliance. Professional support available.`;
    };

    return (
        <>
         <CanonicalHeaders
               title={getSEOTitle()}
               description={getSEODescription()}
               schemaType="Service"
               serviceName={serviceData ? serviceData.Service : toSentenceCase(serviceName)}
               serviceDescription={getSEODescription()}
            />
            <Header />
            <Breadcrumbs pageTitle={toSentenceCase(serviceName)}/>
            <PSPServiceList handleSetName={setServiceName}/>
            <Consultation />
            <Footer />
        </>
    );
};

export default PSPServices;


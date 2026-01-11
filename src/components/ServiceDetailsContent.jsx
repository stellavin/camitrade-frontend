import React from 'react';
import ServiceDetailsInfo from './ServiceDetailsInfo';
import WidgetSearch from './WidgetSearch';
import WidgetCategory from './WidgetCategory';
import WidgetArchive from './WidgetArchive';
import WidgetNewsLetter from './WidgetNewsLetter';
import { useLocation } from 'react-router-dom';
import ServicesData from '../jsonData/ServiceMainData.json'
import Consultation from './Consultation';

const ServiceDetailsContent = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const serviceId = searchParams.get('id');

    // get selected service data
    const selectedService = ServicesData?.find(data => data.id === Number(serviceId) );

    return (
        <>
            <section className="corporate-service-details-sec te-pt-100 te-pb-100 te-md-pt-70 te-md-pb-70 te-sm-pt-50 te-sm-pb-50">
                <div className="container">
                    <div className="service-details-container">
                        <div className="service-details-sidebar">
                            <WidgetCategory selectedService={selectedService} />
                        </div>
                        <div className="service-details-main">
                            <ServiceDetailsInfo selectedService={selectedService}/>
                            <Consultation />
                            <WidgetArchive data={selectedService?.freeZone} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceDetailsContent;
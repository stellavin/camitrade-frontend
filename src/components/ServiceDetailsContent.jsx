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
            <section className="page-details-sec te-pt-100 te-pb-75 te-md-pt-70 te-md-pb-55 te-sm-pt-40 te-sm-pb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ServiceDetailsInfo selectedService={selectedService}/>
                            <WidgetCategory selectedService={selectedService} />
                            <Consultation />
                            <br></br><br></br>
                           <WidgetArchive data={selectedService?.freeZone} />
                        </div>
                        {/* <div className="col-lg-4">
                            <WidgetSearch />
                            
                            <WidgetNewsLetter />
                           
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceDetailsContent;
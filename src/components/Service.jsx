import React from 'react';
import ServiceData from '../jsonData/ServiceData.json';
import SingleService from './SingleService';
import ValueseData from '../jsonData/ValuesData.json';


const Service = (props) => {
    return (
        <>
        {props.aboutus ? (
             <section className="service-sec te-pt-100 te-pb-80 te-md-pt-70 te-md-pb-50 te-sm-pt-40 te-sm-pb-25">
             <div className="container">
                 <div className="row">
                     <div className="col-lg-7 col-xl-6 ">
                         <div className="sec-title">
                             <h1>Our Values</h1>
                             <p>At Camitrade Investment Fiduciaries, our values serve as the cornerstone of our identity and guide our every endeavor.</p>
                         </div>
                     </div>
                 </div>
                 <div className="row">
                     {ValueseData.map(service =>
                         <SingleService service={service} key={service.id} />
                     )}
                 </div>
             </div>
         </section>

        ):(
            <div className="consulting-form-sec2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="consulting-form">
                            <div className="consulting-form-title" style={{height: '400px'}}>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}
           
           
        </>
    );
};

export default Service;
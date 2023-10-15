import React from 'react';
import payment from '/img/video/payments1.jpg'
import card from '/img/video/payment2.jpg'
import { Fade } from 'react-reveal';

const PaymentsContent = (props) => {
    let { bgGray } = props;

    const data = [
        { country: 'Chile', paymentMethods: ['Online', 'Cash', 'QR Code'] },
        { country: 'Brazil',paymentMethods: ['Online', 'Cash', 'QR Code'] },
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
        { country: 'Uganda',paymentMethods: ['Mobile Money'] },
        { country: 'Tanzania', paymentMethods: ['Mobile Money'] },
        { country: 'Ghana', paymentMethods: ['Mobile Money'] },
        { country: 'Rwanda', paymentMethods: ['Mobile Money'] },
      ];

    return (
        <>
           <section className={`faq-section faq-style1  te-md-pt-80 te-md-pb-90 te-sm-pt-40 te-sm-pb-55`}>
                <div>
                    <div className="display-row">
                        <div className="col-lg-6 padding-text bg-blueish">
                            <div className="faq-sec">
                            <div className="sec-title">
                                <Fade left delay={200}>
                                    <h1 className="payments-title">Payment Solutions for Merchants</h1>
                                    <p>
                                    Camitrade Investment Fiduciaries is committed to help its clients acquire the best payment solutions that are secure and unique to a diversified portfolio of enterprises.</p>
                                    <br></br>

                                    <p>
                                    We have a worldwide network of partners that provides the following online payment processing solutions:
                                    </p>
                                </Fade>
                            </div>
                            
                        </div>
                        </div>
                        <div className="col-lg-6 ">
                            <Fade right delay={800}>
                            <div className="video-inner">
                              <img src={payment} alt="payment" />
                            </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`faq-section faq-style1 te-md-pt-80 te-md-pb-90 te-sm-pt-40 te-sm-pb-55`}>
                <div>
          
                    {/* row 2 */}
                    <div className="display-row">
                    <div className="col-lg-6">
                            <Fade right delay={800}>
                            <div className="video-inner">
                              <img src={card} alt="videoThumb" />
                            </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6 padding-text-2 bg-redish">
                            <div className="faq-sec">
                            <div className="sec-title">
                                <Fade left delay={200}>
                                    <h1 className="payments-title">Card Collection and Payouts</h1>
                                    <p>
                                    The creation of cards has typically been country-specific, leading to a variety of systems innovation worldwide. However, as technology has advanced, compatibility has increased, facilitating global money transfers through flexible Application Programming Interface (API) connection..</p>
                                    <br></br>

                                    <p>
                                    The available card networks that we can assist our clientele to acquire from our broad partners include:
                                    </p><br></br>
                                    <ol>
                                        <li>VISA</li>
                                        <li>Mastercard</li>
                                        <li>Amex</li>
                                        <li>Diners Club</li>
                                        <li>Discover</li>
                                        <li>JCB</li>

                                    </ol>
                                </Fade>
                            </div>
                            
                        </div>
                        </div>
                        
                    </div>
                  </div>
            </section>
            <section className={`${bgGray} faq-section faq-style1  te-pb-75 te-md-pt-80 te-md-pb-90 te-sm-pt-40 te-sm-pb-55`}>
                <div className="padding-text">
          
                    {/* end */}
                     {/* row 3*/}
                     <br></br> <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="faq-sec">
                            <div className="sec-title">
                                <Fade left delay={200}>
                                    <h1 className="payments-title"> Payment network channels and payment methods</h1>
                                    <p>
                                    The payment network channels and payment methods differ from continent and jurisdictions.</p>
                                </Fade>
                            </div>
                        </div>
                        </div> 
                    </div>
                    {/* end */}
                    <div className="table-main-container">
                    <div className="col-lg-6 ">
                    <div className="table-container">
                    <h2>South America</h2>
                    <table className="custom-table">
                        <thead>
                        <tr>
                            <th>Country</th>
                            <th>Payment Methods</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                            <td>{item.country}</td>
                            <td>
                                <ul className="payment-methods">
                                {item.paymentMethods.map((method, index) => (
                                    <li key={index}>
                                    {method}
                                    {index !== item.paymentMethods.length - 1 && <hr />}
                                    </li>
                                ))}
                                </ul>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                    </div>

                    <div className="col-lg-5 ">
                    <div className="table-container">
                    <h2>Africa</h2>
                    <table className="custom-table">
                        <thead>
                        <tr>
                            <th>Country</th>
                            <th>Payment Methods</th>
                        </tr>
                        </thead>
                        <tbody>
                        {africaData.map((item, index) => (
                            <tr key={index}>
                            <td>{item.country}</td>
                            <td>
                                <ul className="payment-methods">
                                {item.paymentMethods.map((method, index) => (
                                    <li key={index}>
                                    {method}
                                    {index !== item.paymentMethods.length - 1 && <hr />}
                                    </li>
                                ))}
                                </ul>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                    </div>
                    </div>
                    {/* row 2 */}
                    <br></br><br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="faq-sec">
                            <div className="sec-title">
                                <Fade left delay={200}>
                                    <h1 className="payments-title">Enterprises Supported</h1>
                                   
                                    <ol>
                                        <li>Forex industry</li>
                                        <li>Gaming and gambling industry</li>
                                        <li>Export and import industry</li>
                                        <li>Oil industry</li>
                                        <li>Household commodities industry</li>
                                        <li>Clothing industry</li>
                                        <li>Pharmaceutical industry</li>
                                        <li>Online education industry</li>
                                        <li>Travel Industry</li>
                                        <li>Other enterprises that are legal and lawful</li>

                                    </ol>
                                </Fade>
                            </div>
                            
                        </div>
                        </div>
                        
                    </div>
                    {/* end */}
                </div>
            </section>
        </>
    );
};

export default PaymentsContent;
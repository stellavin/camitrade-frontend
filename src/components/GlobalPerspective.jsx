import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

const GlobalPerspective = () => {
    return (
        <>
            <section className="global-perspective-sec te-pt-100 te-pb-100 te-md-pt-70 te-md-pb-70 te-sm-pt-50 te-sm-pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <Fade bottom delay={200}>
                                <div className="sec-title text-center">
                                    <h1>Global Perspective</h1>
                                    <div className="title-underline-center"></div>
                                </div>
                            </Fade>
                            <div className="global-content">
                                <Fade bottom delay={300}>
                                    <p className="global-text-primary">
                                        Camitrade Investment Fiduciaries balances global structuring capabilities with deep local regulatory understanding. This combination is essential for international clients who need <Link to="/corporate-services">structures that work across borders</Link> while remaining compliant in each <Link to="/jurisdictions">jurisdiction</Link>.
                                    </p>
                                </Fade>
                                <Fade bottom delay={400}>
                                    <p className="global-text">
                                        We understand that global expansion is not just about choosing <Link to="/jurisdictions">jurisdictions</Link>, but about creating structures that facilitate cross-border operations while respecting the regulatory requirements of each jurisdiction. A structure that optimizes for one jurisdiction may create compliance challenges in another. We help clients navigate these trade-offs with clarity and confidence through our <Link to="/licensing-services">comprehensive licensing services</Link>.
                                    </p>
                                </Fade>
                                <Fade bottom delay={500}>
                                    <p className="global-text">
                                        Our presence and relationships across Africa, Europe, the Middle East, and offshore jurisdictions allow us to provide coordinated <Link to="/corporate-services">advisory services</Link> that ensure consistency across jurisdictions while respecting local regulatory requirements. We help clients build global structures that are not just legally sound, but operationally efficient and regulator-approved in each jurisdiction where they operate.
                                    </p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GlobalPerspective;


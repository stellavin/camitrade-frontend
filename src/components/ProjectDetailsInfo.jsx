import React from 'react';
import projectDetails from '/img/projects/project-details.jpg'
import projectDetails2 from '/img/projects/project-details2.jpg'

const ProjectDetailsInfo = () => {
    return (
        <>
            <div className="page-details">
                <div className="page-details-desc">
                    <h1>Financial Planing Project Details</h1>
                    <p>Ante ligula sit ut at mattis maecenas, vel sed eros risus nam. Pulvinar vel commodo ac volutpat sed, odio ac elementum imperdiet pellentesque, metus non feugiat parturient, velit at eu libero sed. Et sem, vel nec, delectus nibh tortor nibh orci massa, arcu donec porttitor cras natoque diam, blandit fringilla adipiscing. Morbi leo tincidunt libero mauris, ad vestibulum lorem nec lacus massa sit, sapien ut erat hendrerit eget lorem. Est commodo ut, at nisl nibh lectus viverra porta, et urna vestibulum</p>
                </div>
                <div className="page-details-thumb">
                    <img className="img-fluid" src={projectDetails} alt="projectDetails" />
                </div>
                <div className="project-details-list">
                    <div className="project-list-box">
                        <h2>project name</h2>
                        <span>Financial Planing </span>
                    </div>
                    <div className="project-list-box">
                        <h2>date line</h2>
                        <span>25 December 2022</span>
                    </div>
                    <div className="project-list-box">
                        <h2>budget</h2>
                        <span>$ 30,000</span>
                    </div>
                    <div className="project-list-box">
                        <h2>client</h2>
                        <span>themeforest</span>
                    </div>
                </div>
                <div className="page-details-desc">
                    <h2>Project Plan</h2>
                    <p>Suspendisse sociosqu scelerisque massa est sed, mauris laoreet, vulputate in sit sodales odio, ante mauriaquam. Eget non tortor sed sem lacus, tellus ut enim. Egestas varius consequat euismod penatibus odio, at urna nulla donec curabitur. Sed quam vel ligula litora a at, ultricies natoque ut id neque volutpat, ante dui arcu et, in grida tempor nisl mollis eget. Vitae sed a. Illum vestibulum. Magna ullamcorper.</p>
                </div>
                <div className="page-details-desc">
                    <h2>Strategies of Project</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="page-details-col">
                                <img className="img-fluid" src={projectDetails2} alt="projectDetails" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="page-details-col">
                                <p>elementum interdum amet elementum egestas,fasis eros, massa sed quis rutrum, auctor mattis amet ut in mi, sed mauris. Suspendisse adipiscing bangd jueteyhyewt iuniversity of usa</p>
                                <ul>
                                    <li>Consequat eget vel natoque in duis dui.</li>
                                    <li>Mlementum suscipit mollis tellus. Donec tortor</li>
                                    <li>Amet commodo urna diam nunc</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetailsInfo;
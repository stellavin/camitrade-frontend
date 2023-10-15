import React from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import ProjectDetailsContent from '../components/ProjectDetailsContent';
import Footer from '../components/Footer';

const ProjectDetails = () => {
    return (
        <>
            <Header />
            <Breadcrumbs pageTitle={"Project Details"} />
            <ProjectDetailsContent />
            <Footer />
        </>
    );
};

export default ProjectDetails;
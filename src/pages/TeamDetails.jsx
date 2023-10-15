import React from 'react';
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs';
import TeamMemberDetails from '../components/TeamMemberDetails';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

const TeamDetails = () => {
    return (
        <>
            <Header />
            <Breadcrumbs pageTitle={"Team Details"} />
            <TeamMemberDetails />
            <Partners />
            <Footer />
        </>
    );
};

export default TeamDetails;
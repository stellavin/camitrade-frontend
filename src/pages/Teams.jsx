import React from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import TeamMember from '../components/TeamMember';
import Partners from '../components/Partners';
import Footer from '../components/Footer';


const Teams = () => {
    return (
        <>
            <Header />
            <Breadcrumbs pageTitle={"Our Team"} />
            <TeamMember />
            <Partners />
            <Footer />
        </>
    );
};

export default Teams;
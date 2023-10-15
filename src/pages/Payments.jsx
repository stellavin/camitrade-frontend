import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import PaymentsContent from '../components/PaymentsContent';

const PaymentsPage = () => {
    return (
        <>
            <Header />
            <Breadcrumbs pageTitle="Payments" />
            <PaymentsContent />
            <Footer />
        </>
    );
};

export default PaymentsPage;
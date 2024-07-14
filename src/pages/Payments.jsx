import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import PaymentsContent from '../components/PaymentsContent';
import CanonicalHeaders from '../components/CanonicalHeaders';

const PaymentsPage = () => {
    return (
        <> <CanonicalHeaders
        title ="About Us | We ensure legal compliance and sustainable growth."
        description ="Camitrade Fiduciaries provides global company incorporation and administration services, Licensing services and Payment solutions"
        />
            <Header />
            <Breadcrumbs pageTitle="Payments" />
            <PaymentsContent />
            <Footer />
        </>
    );
};

export default PaymentsPage;
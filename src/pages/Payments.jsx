import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import PaymentsContent from '../components/PaymentsContent';
import CanonicalHeaders from '../components/CanonicalHeaders';

const PaymentsPage = () => {
    return (
        <> <CanonicalHeaders
        title ="Global Payment Solutions | Secure Business Transactions"
        description ="Access our comprehensive payment solutions for international business. We offer secure, efficient, and compliant payment processing services tailored to your global business needs."
        schemaType="Service"
        serviceName="Payment Solutions"
        serviceDescription="Secure and efficient payment processing services for international business transactions"
        />
            <Header />
            <Breadcrumbs pageTitle="Payments" />
            <PaymentsContent />
            <Footer />
        </>
    );
};

export default PaymentsPage;
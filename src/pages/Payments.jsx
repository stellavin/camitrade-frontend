import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import PaymentsContent from '../components/PaymentsContent';
import CanonicalHeaders from '../components/CanonicalHeaders';
import Consultation from '../components/Consultation';

const PaymentsPage = () => {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What payment solutions does Camitrade offer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Camitrade offers comprehensive payment solutions including online card collection, merchant acquiring, domestic and international payouts, API-enabled integrations, and region-specific payment methods through our global network of regulated payment partners."
                }
            },
            {
                "@type": "Question",
                "name": "Does Camitrade support card payments?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Camitrade supports card payments through major international card networks including VISA, Mastercard, American Express, Diners Club, Discover, and JCB via our global payment partners."
                }
            },
            {
                "@type": "Question",
                "name": "Which countries are supported for payment processing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Camitrade supports payment processing across multiple jurisdictions, including countries in South America (Chile, Brazil, Ecuador, Panama, Peru, Costa Rica, Mexico, Colombia, Guatemala) and Africa (Kenya, Uganda, Tanzania, Ghana, Rwanda), with region-specific payment methods tailored to local preferences."
                }
            },
            {
                "@type": "Question",
                "name": "Does Camitrade support mobile money?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Camitrade supports mobile money payments, particularly in African markets where it is the primary payment method. We help merchants access mobile money solutions through our regional payment partners."
                }
            },
            {
                "@type": "Question",
                "name": "Is payment processing compliant with regulations?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Camitrade prioritizes regulatory compliance and transaction security. We work exclusively with vetted payment providers and ensure all merchant operations align with applicable financial and regulatory requirements in each jurisdiction."
                }
            }
        ]
    };

    return (
        <> 
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema, null, 2)}
                </script>
            </Helmet>
            <CanonicalHeaders
                title="Global Payment Solutions | Secure Business Transactions"
                description="Access our comprehensive payment solutions for international business. We offer secure, efficient, and compliant payment processing services tailored to your global business needs."
                schemaType="Service"
                serviceName="Payment Solutions"
                serviceDescription="Secure and efficient payment processing services for international business transactions"
            />
            <Header />
            <Breadcrumbs pageTitle="Payments" />
            <PaymentsContent />
            <Consultation />
            <Footer />
        </>
    );
};

export default PaymentsPage;
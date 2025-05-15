// Css 
import './App.css'
import './assets/css/spacing.css'
import 'react-multi-carousel/lib/styles.css';
import '@icon/icofont/icofont.css'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './assets/css/main.css'
import './assets/css/responsive.css'

// Components 
import React, { Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import ScrollUpBtn from './components/ScrollUpBtn';
import PreLoader from './components/PreLoader';

// Lazy-loaded components
const Home = React.lazy(() => import('./pages/Home'));
const Payments = React.lazy(() => import('./pages/Payments'));
const Jurisdictions = React.lazy(() => import('./pages/Jurisdictions'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Corporate = React.lazy(() => import('./pages/CorporatePages'));
const OtherServicesPage = React.lazy(() => import('./pages/OtherServices'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Services2 = React.lazy(() => import('./pages/Services2'));
const ServiceDetails = React.lazy(() => import('./pages/ServiceDetails'));
const ProjectDetails = React.lazy(() => import('./pages/ProjectDetails'));
const Teams = React.lazy(() => import('./pages/Teams'));
const TeamDetails = React.lazy(() => import('./pages/TeamDetails'));
const BlogDetails = React.lazy(() => import('./pages/BlogDetails'));
const BlogGrid = React.lazy(() => import('./pages/BlogGrid'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'));
const LicensingServices = React.lazy(() => import('./pages/LicensingServices'));
const Offers = React.lazy(() => import('./pages/Offers'));

function App() {
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 10);
  }, []);

  return (
    <>
      <Helmet>
        <title>Camitrade – Offshore Companies| Offshore Licenses| Offshore Banking </title>
        <link rel="shortcut icon" href="favicon.ico" />
      </Helmet>

      {isLoading ? (
        <PreLoader />
      ) : (
        <div>
          <Suspense fallback={<PreLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/Corporate" element={<Services />} />
              <Route path="/services/:id" element={<Services />} />
              <Route path="/corporate-services" element={<Corporate />} />
              <Route path="/corporate-services/:id" element={<Corporate />} />
              <Route path="/licensing-services" element={<LicensingServices />} />
              <Route path="/licensing-services/:id" element={<LicensingServices />} />
              <Route path="/other-services" element={<OtherServicesPage />} />
              <Route path="/other-services/:id" element={<OtherServicesPage />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/jurisdictions" element={<Jurisdictions />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>

          <ScrollUpBtn />
          <ToastContainer />
        </div>
      )}
    </>
  );
}

export default App;

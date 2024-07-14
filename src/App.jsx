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
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify'

import Home from './pages/Home';
import Payments from './pages/Payments';
import Jurisdictions from './pages/Jurisdictions';
import About from './pages/About';
import Services from './pages/Services';
import Corporate from './pages/CorporatePages';
import OtherServicesPage from './pages/OtherServices';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Services2 from './pages/Services2';
import ServiceDetails from './pages/ServiceDetails';
import ProjectDetails from './pages/ProjectDetails';
import Teams from './pages/Teams';
import TeamDetails from './pages/TeamDetails';
import BlogDetails from './pages/BlogDetails';
import BlogGrid from './pages/BlogGrid';
import ScrollUpBtn from './components/ScrollUpBtn';
import PreLoader from './components/PreLoader';
import { useEffect, useState } from 'react';
import NotFound from './components/NotFound';
import ErrorPage from './pages/ErrorPage';
import LicensingServices from './pages/LicensingServices';
import Offers from './pages/Offers';

function App() {

  //  Preloader 
  let [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 10)
  }, [])


  return (

    <>
      {isLoading ? <PreLoader /> :
        <div>
          <Helmet>
            <title>Camitrade Investment Fiduciaries </title>
            <link rel="shortcut icon" href="favicon.ico"></link>
          </Helmet>

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/payments' element={<Payments />}></Route>
            <Route path='/jurisdictions' element={<Jurisdictions />}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/corporate' element={<Corporate />}></Route>
            <Route path='/other-services' element={<OtherServicesPage />}></Route>
            <Route path='/licensing-services' element={<LicensingServices />}></Route>
            <Route path='/offers' element={<Offers />}></Route>
          
            <Route path='/services-2' element={<Services2 />}></Route>
            <Route path='/service-details' element={<ServiceDetails />}></Route>
            <Route path='/project-details' element={<ProjectDetails />}></Route>
            <Route path='/page' element={<About />}></Route>
            <Route path='/team' element={<Teams />}></Route>
            <Route path='/team-details' element={<TeamDetails />}></Route>
            <Route path='/blog' element={<Blog />}></Route>
            <Route path='/blog-grid' element={<BlogGrid />}></Route>
            <Route path='/blog-details' element={<BlogDetails />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/preloader' element={<PreLoader />}></Route>
            <Route path='*' element={<ErrorPage />}></Route>
          </Routes>
          <ScrollUpBtn />
          <ToastContainer />
        </div>
      }
    </>
  )
}

export default App

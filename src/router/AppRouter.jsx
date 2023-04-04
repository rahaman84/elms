import React, { Component, Fragment } from 'react'
import { Routes ,Route } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import AllCorusePage from '../pages/AllCorusePage';
import AllServicePage from '../pages/AllServicePage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import PortfolioPage from '../pages/PortfolioPage ';
import RefundPage from '../pages/RefundPage';
import TremsPage from '../pages/TremsPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';  
import CourseDetailsPage from '../pages/CourseDetailsPage';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';


class AppRouter extends Component {



     render() {
          return (
               <Fragment>
                   
              
              <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route exact path="/service" element={<AllServicePage/>} />
          <Route exact path="/course" element={<AllCorusePage/>} />
          <Route exact path="/porfolio" element={<PortfolioPage/>} />
          <Route exact path="/about" element={<AboutPage/>} />
          <Route exact path="/contact" element={<ContactPage/>} />

               {/* Footal Nav link */}
          <Route exact path="/refund" element={<RefundPage/>} />
          <Route exact path="/trems" element={<TremsPage/>} />  
          <Route exact path="/privacy" element={<PrivacyPage/>} />

          <Route exact path="/ProjectDetails/:projectID/:projectName" component={ProjectDetailPage} />
          {/* <Route exact path="/ProjectDetails/:projectID" element={<ProjectDetails />} />  */}
          <Route exact path="/coursedetails" element={<CourseDetailsPage/>} />
     



           
         
          </Routes>
        
          

               </Fragment>
          )
     }
}
export default AppRouter
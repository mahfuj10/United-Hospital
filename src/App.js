import './App.css';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import SignUpLogin from './pages/LogInSignUp/SignUpLogin';
import Navbar from './pages/Home/Header/Navbar';
import Auth from './Context/Auth';
import ServiceDetails from './pages/Details/ServiceDetails';
import getReview from '../src/pages/Home/Feddback/getReview';
import Footer from './pages/Footer/Footer';
import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./App.css";
import Feedback from 'react-bootstrap/esm/Feedback';
import img1 from '../src/images/image1.jpg';
import Review from './pages/Home/Feddback/Review';
import { spacing } from '@mui/system';
import customerReview from './pages/Home/Feddback/customerReview';
import Contact from './pages/Contact/Contact';
import About from '../src/pages/About/About';
import Doctors from './pages/Doctors/Doctors';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Blog from './pages/Blog/Blog';
import NoFound from './pages/Nofound/Nofound';

function App() {


      
  return (
       
  <Auth>
    
     <BrowserRouter>

<Navbar/>
    
     <Switch>
     


       <Route exact path="/">
         
           <Home />
     
       </Route>

       <Route path="/home">
            <Home />
          
       </Route>

       <Route path="/login">
           <SignUpLogin />
       </Route>

       <Route path="/signup">
            <SignUpLogin />

       </Route>

       <PrivateRoute path="/details/:departmentId">
            <ServiceDetails />
       </PrivateRoute>

       <Route path="/contact">
            <Contact />
       </Route>

       <Route path="/about">
            <About />
       </Route>

       <Route path="/doctors">
            <Doctors />
       </Route>

       <Route path="/blog">
            <Blog />
       </Route>

       <Route exact path="*">
            <NoFound />
       </Route>
     
     </Switch>
       <Footer />

     </BrowserRouter>

     </Auth>
  );
}

export default App;

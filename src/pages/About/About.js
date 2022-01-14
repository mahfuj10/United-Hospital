import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import aboutImg from '../../images/aboutImage.webp';
import historyImg from '../../images/groupDoctor.webp';
import aboutBanner from '../../images/aboutBanner.png';

import './About.css';

const About = () => {
    return (
     
     
         <section >

             <article className="about-banner" style={{backgroundImage:`url(https://image.freepik.com/free-photo/blur-hospital_1203-7956.jpg)`,height:"500px",backgroundSize:"cover"}}>

            
        <aside style={{paddingTop:"40vh",marginLeft:"19vh",color:"#fff"}}>
              <h2  style={{fontFamily: 'Poppins, sans-serif'}}>About US</h2>
              <h6><Link to="/home" className="text-decoration-none text-light">Home</Link> / <span >About</span></h6>
         </aside>
         
          </article>


        <article  className="d-flex hospital-hisotry gap-4 align-items-center"style={{marginLeft:"25%",marginTop:"5%",marginBottom:"5%"}}>

            <aside className="order-last  order-lg-first" style={{width:"540px"}}>
              <h3 className="mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>Our History</h3>
               <p className="mb-4 "  style={{width:"90%",textAlign:"justify",fontFamily: 'Lato, sans-serif'}}>The history of hospitals began in antiquity with hospitals in Greece, the Roman Empire and on the Indian subcontinent as well, starting with precursors in the Asclepian temples in ancient Greece and then the military hospitals in ancient Rome. The Greek temples were dedicated to the sick and infirm but did not look anything like modern hospitals. The Romans did not have dedicated, public hospitals. Public hospitals, per se, did not exist until the Christian period.[1] Towards the end of the 4th century.</p>
               <Button variant="contained" id="appoinmantBtn" style={{padding:"12px 20px",backgroundColor:"#f07946",color:"#fff"}}>Read More</Button>
            </aside>

            <aside>
                <img className="order-1 mt-5 mt-lg-0 mb-3 mb-lg-0" width="540" height="275" src={historyImg} alt="" />
            </aside>
            
        </article>


          <article className="d-flex about-us align-items-center gap-5"style={{marginLeft:"25%",marginTop:"5%",marginBottom:"5%"}} >
                <aside >
                        <img className="aboutImg" src={aboutImg} height="626" width="540" alt="" />
                </aside>

                <asdie className="ps-5 detailsUs">
                    <h4 className="mb-5" style={{fontFamily: 'Poppins, sans-serif'}}>About Our Hospital</h4>
                    <p className="w-50 aboutText" style={{textAlign:"justify",fontFamily: 'Lato, sans-serif'}}>Vestibulum condimentum, risus sedones honcus rutrum, salah lacus mollis zurna, nec finibusmi velit advertisis. Proin vitae odin quis magna aliquet laciniae. Etiam auctor, nisi vel. Pellentesque ultrices nisl quam iaculis, nec pulvinar augue.</p>

                    <span className="d-flex justify-content-between w-50 mt-5">
                        <h6>Experience Doctor</h6>
                        <h6>80%</h6>
                    </span>
                    <div className="progress  w-50">
                     <div className="progress-bar w-75" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                   </div>


                    <span className="d-flex justify-content-between w-50 mt-4">
                        <h6>Modern Equipment</h6>
                        <h6>65%</h6>
                    </span>
                    <div className="progress w-50">
                     <div className="progress-bar w-75" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                   </div>


                    <span className="d-flex justify-content-between w-50 mt-4">
                        <h6>Frendly Staff</h6>
                        <h6>90%</h6>
                    </span>
                    <div className="progress w-50">
                     <div className="progress-bar w-75" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                   </div>

                </asdie>


          </article>


            <article className="aboutDetials" style={{backgroundImage:`url(${aboutBanner})`,height:"400px",backgroundAttachment:"fixed",backgroundSize:"cover",width:"100%"}}>

                <aside>
                    <h1 className="text-center"><i className="fas fa-user-nurse"></i></h1>
                    <h1 className="text-center">3297</h1>
                    <h6 className="text-center">Satisfied Customer</h6>
                </aside>
                
                <aside>
                    <h1  className="text-center"><i className="fas fa-bed"></i></h1>
                    <h1  className="text-center">464</h1>
                    <h6  className="text-center">Hospial Bed</h6>
                </aside>

                <aside>
                    <h1  className="text-center"><i className="fas fa-user-md"></i></h1>
                    <h1  className="text-center">729</h1>
                    <h6  className="text-center">Qualified Doctor</h6>
                </aside>

                <aside>
                    <h1  className="text-center"><i className="fas fa-building"></i></h1>
                    <h1  className="text-center">14</h1>
                    <h6  className="text-center">Department</h6>
                </aside>


            </article>


        </section>
    );
};

export default About;
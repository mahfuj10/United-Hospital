import React from 'react';
import { Link } from 'react-router-dom';
import './Foote.css';

const Footer = () => {
    return (
        
        <footer className="row">
            <aside className="col-lg-4 footerDetails">
               <h5 className="mb-3">United Hospital</h5>
               <p className="w-75">The most valuable thing is your health. We are avilabele to help you.We're happy if we help you.</p>
        <span className="fs-4 text-center">
             <i class="fab fa-facebook-square me-3"></i>
             <i class="fab fa-twitter-square me-3"></i>
             <i class="fab fa-linkedin me-3"></i>
             <i class="fab fa-snapchat-square"></i>
       </span>
            </aside>

            <aside className="col-lg-2 col-6" style={{marginTop:"5%"}}>
               <h6 className="mb-4">United Hospital</h6>
              <p><strong>Address:</strong> Miltonstr California USA</p>
              <p><strong>Phone:</strong> 017832424344</p>
              <p><strong>Email:</strong> deser@gmial.com</p>
            </aside>

            <aside className="col-lg-2 col-6" style={{marginTop:"5%"}}>
               <h6 className="mb-4">Usfull Link</h6>
              <Link>About</Link>
              <Link>Doctors</Link>
              <Link>Blog</Link>
              <Link>Contact</Link>
            </aside>

            <aside className="col-lg-2 col-6" style={{marginTop:"5%"}}>
               <h6 className="mb-4">Department</h6>
              <Link>Eye Care</Link>
              <Link>Diagnostic </Link>
              <Link>Physical Therapy</Link>
              <Link>Skin Surgery</Link>
            </aside>
            <aside className="col-lg-2 col-6" style={{marginTop:"5%"}}>
              <Link>CardDiology</Link>
              <Link>Dental Care </Link>
              <Link>Hart Surgery</Link>
              <Link>Neurology</Link>
            </aside>

            
           
        </footer>
    );
};

export default Footer;
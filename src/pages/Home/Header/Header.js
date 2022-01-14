import { Button } from '@mui/material';
import React from 'react';
import headerImg from '../../../images/headerBanner.jpeg';
import headerImg3 from '../../../images/bg3-01.png';
import './Header.css';

const Header = () => {

    return (
   
        <header style={{backgroundImage:`url(${headerImg3})`,height:"100vh",backgroundAttachment:"fixed",backgroundSize:"cover",  backgroundPosition: "center",backgroundRepeat: "no-repeat"}}>
        
       <article className="headerText">
             <h1>The Most Valuable <br /> Thing is Your Health</h1>
             <p>Far far away, behind the word mountains, far from  the countries <br /> Vokalia and  Consonantia, there live the blind texts. Vokalia and  <br /> Consonantia Separated they live in Bookmarksgrove.</p>
             <Button variant="contained" id="appoinmantBtn" style={{padding:"12px 20px",backgroundColor:"#fff",color:"black"}}>Make an Appoinment</Button>
       </article>


        </header>
    );
};

export default Header;
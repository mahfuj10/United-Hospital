import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import doctorBanner from '../../images/headerBanner.jpeg'
import React, { useEffect, useState } from 'react';
import './Doctors.css';
import Appointmnet from '../Home/Appointmnet/Appointmnet';

const Doctors = () => {

    const [ doctors, setDoctors ] = useState([]);

useEffect( () => {
    fetch(`Doctors.json`)
      .then(resuult => resuult.json())
      .then(data => setDoctors(data))
}, [])

    return (
      

        <section>

<article style={{backgroundImage:`url(${doctorBanner})`,height:"500px",backgroundSize:"cover",backgroundAttachment:"fixed"}}>

<aside  style={{marginLeft:"20vh",paddingTop:"37vh",color:"black"}}>
    <h1>Doctors</h1>
    <h6>Home / <span >Doctors</span></h6>
</aside>

</article>
        

       <article className="doctorsContainer">
         {
            doctors.map(doctor => <Card 
            className="singleDoctors"
            sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="255"
                    width="255"
                    image={doctor?.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography className="text-center" gutterBottom variant="h5" component="div">
                     Dr. {doctor?.name}
                    </Typography>
                    <Typography className="text-center" variant="body2">
                      <h6>{doctor?.department}</h6>
                    </Typography>
                    <span className="fs-4 contactIcon   pt-3">
                         <i class="fab fa-facebook-square me-3 "></i>
                         <i class="fab fa-twitter-square me-3"></i>
                         <i class="fab fa-linkedin me-3"></i>
                         <i class="fab fa-snapchat-square"></i>
                    </span>
                  </CardContent>
                </CardActionArea>
              </Card>)
         }
       </article>


    <artice >
        <Appointmnet/>
        <h4 style={{marginBottom:"200px"}}></h4>

    </artice>
       </section>
       

    );
};

export default Doctors;
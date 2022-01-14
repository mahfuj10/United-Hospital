import { CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import SingleServiceDetails from './SingleServiceDetails';
import Appointmnet from '../../pages/Home/Appointmnet/Appointmnet';
import '../Home/Services/Service.css';

const ServiceDetails = () => {

    const {departmentId} = useParams();
    const [ departments, setDepartments ] = useState([]);

useEffect( () => {
    fetch('/Departments.json')
      .then(result => result.json())
      .then(data => setDepartments(data))
 }, [])


const department = departments?.find(service => service.id === departmentId);

    return (
        
        <section>

           <article className="detailsBanner" style={{backgroundImage:`url(${"https://businesspost.ng/wp-content/uploads/2017/04/Medical-Services.jpg"})`,height:"600px",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
           
            <img src={department?.icon} className="position-absolute" style={{marginTop:"49vh",marginLeft:"9vh"}} width="80" alt="" />
            
            <h2 style={{paddingTop:"50vh",marginLeft:"20vh",color:"#fff", fontFamily: 'Poppins, sans-serif'}}>{department?.name} </h2>
            
            <h6 style={{marginLeft:"20vh",marginTop:"10px",color:"#fff"}}>Home / <span > {department?.name}</span></h6>

        </article>

        <h3 className="text-center routeName mt-5" style={{  fontFamily: 'Poppins, sans-serif'}}>Our <span style={{color:"#f07946"}}>{department?.name}</span> Department</h3>
        
        <article className="" style={{marginTop:"8vh"}}>
            <article className="row">
                <aside className="col-lg-6 col-12">
                    <img className="departmentImg img-fluid " style={{marginLeft:"50%"}} width="450"  src={department?.image} alt="" />
                </aside>
                <aside className="col-lg-6 col-12 ">
                    <aside style={{paddingLeft:"100px"}} className="department-title">
                      <h5>Cost of this tratment  ${department?.cost}</h5>
                          <p className="w-50 " style={{fontFamily: 'Lato, sans-serif'}}>{department?.details}</p>

                    </aside>
                </aside>
            </article>
        </article>

<h3 style={{textAlign:"center",marginTop:"10vh", fontFamily: 'Poppins, sans-serif'}}>Our {department?.name} Specialist</h3>

<article className="d-flex flex-wrap departmentSpecialist justify-content-center gap-4" style={{marginTop:"8vh"}}>
       

   <Card className="singleDoctors border-0"
            sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="225"
                    width="225"
                    image={department?.doctor}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography className="text-center" gutterBottom variant="h5" component="div">
                     Dr. {department?.doctorName}
                    </Typography>
                    <Typography className="text-center" variant="body2">
                      <h6>{department?.department}</h6>
                    </Typography>
                    <span className="fs-4 contactIcon   pt-3">
                         <i class="fab fa-facebook-square me-3 "></i>
                         <i class="fab fa-twitter-square me-3"></i>
                         <i class="fab fa-linkedin me-3"></i>
                         <i class="fab fa-snapchat-square"></i>
                    </span>
                  </CardContent>
                </CardActionArea>
              </Card>

<Card 
            className="singleDoctors border-0"
            sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="225"
                    width="225"
                    image={department?.secondDoctor}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography className="text-center" gutterBottom variant="h5" component="div">
                     Dr. {department?.doctorName}
                    </Typography>
                    <Typography className="text-center" variant="body2">
                      <h6>{department?.department}</h6>
                    </Typography>
                    <span className="fs-4 contactIcon   pt-3">
                         <i class="fab fa-facebook-square me-3 "></i>
                         <i class="fab fa-twitter-square me-3"></i>
                         <i class="fab fa-linkedin me-3"></i>
                         <i class="fab fa-snapchat-square"></i>
                    </span>
                  </CardContent>
                </CardActionArea>
              </Card>

<Card 
            className="singleDoctors border-0"
            sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="225"
                    width="225"
                    image={department?.thirdDoctor}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography className="text-center" gutterBottom variant="h5" component="div">
                     Dr. {department?.doctorName}
                    </Typography>
                    <Typography className="text-center" variant="body2">
                      <h6>{department?.department}</h6>
                    </Typography>
                    <span className="fs-4 contactIcon   pt-3">
                         <i class="fab fa-facebook-square me-3 "></i>
                         <i class="fab fa-twitter-square me-3"></i>
                         <i class="fab fa-linkedin me-3"></i>
                         <i class="fab fa-snapchat-square"></i>
                    </span>
                  </CardContent>
                </CardActionArea>
              </Card>
  </article>

{/* call appoinmant section */}
    <Appointmnet />
    <h4 style={{marginBottom:"200px"}}></h4>

</section>
    );
};

export default ServiceDetails;
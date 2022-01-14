import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem';
import './Service.css';

const Services = () => {

    const [ services, setServices ] = useState([]);

useEffect( () => {
    // https://mahfuj10.github.io/data/service.json
    fetch('Services.json')
      .then(result => result.json())
      .then(data => setServices(data))

}, [])

// console.log();
   
    return (
        <section style={{paddingBottom:"60px"}}>

        <h1 className="ms-0 text-center" style={{marginLeft:"19%",paddingTop:"5%",fontFamily: 'Poppins, sans-serif'}}>Our Services</h1>

        <article className="serviceContainer">
            {
                services.map(service => <ServiceItem key={service.id} service={service}/>)
            }
        </article>

        </section>
    );
};

export default Services;
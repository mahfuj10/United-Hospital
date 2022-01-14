import React from 'react';
import './Service.css';

const ServiceItem = ({service}) => {

    const { title, image, description } = service;
  
    return (

        <article className="gap-4 serviceItem">
            
            <aside>
                <img className="rounded " src={image} alt="" width="70" style={{marginLeft:"40%"}}/>
            </aside>
            
            <aside>
                <h5 className="text-center mt-3">{title}</h5>
                <p className="description text-center" >{description.slice(0,70)}</p>
            </aside>
        


        </article>
    );
};

export default ServiceItem;
import React from 'react';
import { Link } from 'react-router-dom';
import './Departments.css';

const DepartmentItem = ({department}) => {


    const { icon, name, description, id } = department;
   
    return (

         <article className="departmentItem">
            
            <aside className="mt-4 d-flex gap-3 align-items-center">
                <img style={{marginBottom:"20px"}} width="50" src={icon} alt="" />
                <h4 className="text-light" style={{
fontFamily: 'Poppins, sans-serif'}}>{name}</h4>
            </aside>
        
            <aside>
                <p className="mb-2" style={{fontFamily: 'Lato, sans-serif'}}>{description}</p>
                <Link to={`/details/${id}`} style={{fontFamily: 'Lato, sans-serif'}} className="text-decoration-none text-light"> Learn More ...</Link>

            </aside>
        
        </article>
    );
};

export default DepartmentItem;
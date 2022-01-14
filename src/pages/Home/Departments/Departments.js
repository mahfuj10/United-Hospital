import React, { useEffect, useState } from 'react';
import DepartmentItem from './DepartmentItem';
import deparmentBanner from '../../../images/headerBanner.jpeg';
import './Departments.css'

const Departments = () => {
    
const [ departments, setDepartments ] = useState([]);

useEffect( () => {
    fetch('Departments.json')
      .then(result => result.json())
      .then(data => setDepartments(data))
}, [])

    return (
    
        <section className="pt-5 pb-5 bg-danger" style={{backgroundImage:`url(${deparmentBanner})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundAttachment:"fixed"}}>

        <section className="departmentSection">

            <h1 className="sectionTitle text-light" style={{paddingTop:"5%",marginBottom:"40px",textAlign:"center",fontFamily: 'Poppins, sans-serif'}}>Our Departments</h1>
           
            <article className="departmentContainer">

          

                
        <article className="itemContainer">

            {
                departments.map(department => <DepartmentItem department={department}></DepartmentItem>)
                
            }


            </article>
            </article>

            </section>
        </section>
    );
};

export default Departments;
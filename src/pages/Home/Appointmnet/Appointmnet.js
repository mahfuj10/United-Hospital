import React from 'react';
import './Appointmnet.css';

const Appointmnet = () => {
   
    return (
   
    <section >

<article className="detials"></article>

{/* <section style={{display:"flex",justifyContent:"center",marginTop:"200px"}}> */}
     
<section className="appoinmantSection " >
            
<article className="serviceTime" >

            <h2>Servicing Hours</h2>
            <p className="w-75 serviceTitle mb-5 mt-4" style={{fontFamily: 'Lato, sans-serif'}}>Far far away, behind the word mountains, far from countries
Vokalia and Consonantia, there live the blind texts. Vokalia and Consonantia Separated .</p>
            <aside style={{display:"flex",justifyContent:"space-between",width:"450px",borderBottom:"1px solid gainsboro",marginBottom:"30px"}}>
                <p>Monday-Friday</p>
                <p>07.00 am - 11.30 pm</p>
            </aside>
            <aside style={{display:"flex",width:"450px",justifyContent:"space-between",borderBottom:"1px solid gainsboro",marginBottom:"30px"}}>
                <p>Monday-Saturday</p>
                <p>07.00 am - 11.30 pm</p>
            </aside>
            <aside style={{display:"flex",width:"450px",justifyContent:"space-between",borderBottom:"1px solid gainsboro",marginBottom:"30px"}}>
                <p>Monday-Friday</p>
                <p>07.00 am - 11.30 pm</p>
            </aside>
            <aside style={{display:"flex",width:"450px",justifyContent:"space-between",borderBottom:"1px solid gainsboro",marginBottom:"30px"}}>
                <p>Monday-Friday</p>
                <p>07.00 am - 11.30 pm</p>
            </aside>
            <aside style={{display:"flex",width:"450px",justifyContent:"space-between",borderBottom:"1px solid gainsboro",marginBottom:"30px"}}>
                <p>Monday-Friday</p>
                <p>07.00 am - 11.30 pm</p>
            </aside>
            <aside style={{display:"flex",width:"450px",justifyContent:"space-between",borderBottom:"1px solid gainsboro"}}>
                <p>Monday-Friday</p>
                <p>07.00 am - 11.30 pm</p>
                
            </aside>
            
</article>

        
        <article className="appoinmentDetails shadow " style={{width:"500px",padding:"20px"}}>
           
            <h3 className="text-center mb-4">Book an Appoinment</h3>
            <input required type="text" placeholder="Patient Name"/><br />
            <input required type="text" placeholder="Phone"/><br />
            <input type="text" placeholder="Date of Birth"/><br />
            <input required type="text" placeholder="Doctor Name"/><br />
            <input required type="text" placeholder="Appointment Date"/><br />
            <textarea id="" name="" placeholder="Message" rows="2" cols="58" ></textarea><br />
            <button className="border-0 px-4 py-3 fw-bold btn-info mt-3" style={{backgroundColor:"#FF9668",color:"#fff"}}>CONFIRM BOOKING</button>
        

        </article>
        

        
        </section>
        </section>
        // </section>

    );
};

export default Appointmnet;
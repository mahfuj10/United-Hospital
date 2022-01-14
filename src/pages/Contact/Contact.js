import React from 'react';
import './Contact.css';

const Contact = () => {
   
    return (
   
        <section style={{marginBottom:"200px"}}>

        <article className="contact-banner" style={{backgroundImage:`url(${"https://image.freepik.com/free-photo/blurred-abstract-background-interior-view-looking-out-toward-empty-office-lobby-entrance-doors-glass-curtain-wall-with-frame_1339-6364.jpg"})`,height:"600px",backgroundSize:"cover"}}>

          <aside className="section-name" style={{paddingTop:"48vh",marginLeft:"19vh"}}>
              <h1>Contact</h1>
              <h6>Home / Contact</h6>
          </aside>
            
        </article>

       <article >
          <iframe className="googleMap " title={'assad'} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7781567.442483093!2d-122.79418631473914!3d36.79300306359376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sbd!4v1634589873338!5m2!1sen!2sbd" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
       </article>

       <article className="d-flex contact-section">
        
         <aside className="" style={{marginTop:"60px",marginLeft:"16%"}}>
            <h3 className="pb-4">Have a question fell free to contact with us !!!</h3>
           
            <span className="d-lg-flex gap-3 mt-3">
                <input className="w-50 mt-3 mt-lg-0" type="text" placeholder="Enter your Name" />
                <input className="w-50" type="email" placeholder="Enter your Email"/>
            </span>
            <span className="d-lg-flex gap-3 mt-3">
                <input className="w-50 mt-3 mt-lg-0" type="text" placeholder="Enter your Name" />
                <input className="w-50" type="email" placeholder="Enter your Email"/>
            </span>
            <input type="text" style={{width:"730px"}} placeholder="Your Topic"/><br />
            <input type="text" style={{width:"730px"}} placeholder="Your Topic"/><br />
            <textarea placeholder="Message" name="" id="" cols="96" rows="5"></textarea><br />
            <button className="border-0 px-5 py-3 fw-bold btn-info mt-3" style={{backgroundColor:"#FF9668",color:"#fff",letterSpacing:"2px"}}>SEND</button>
         </aside>

         <aside className="contact-button" style={{marginLeft:"5%",marginTop:"5%"}}>
          
          
            <aside className="cotactDetails px-5 " style={{display:"grid",rowGap:"30px"}}>

              <aside className="singleDetials shadow">
                <h5 className="text-center pt-3 mb-2"> Address</h5>
                <h6 className="text-center"><i class="fas fa-map-marked-alt"></i> 21 Macron Road , California Usa </h6>
              </aside>

            <aside className="singleDetials shadow">
                <h5 className="text-center pt-3 mb-2"> Phone</h5>
                <h6 className="text-center"><i class="fas fa-mobile-alt"></i>  017343948393</h6>
            </aside>

              <aside className="singleDetials shadow">
                 <h5 className="text-center pt-3 mb-2"> Fax</h5>
                <h6 className="text-center"><i class="fas fa-fax"></i> +23423423434</h6>
              </aside>

                <aside className="singleDetials shadow">
                   <h5 className="text-center pt-3 mb-2"> Email</h5>
                   <h6 className="text-center"><i class="fas fa-envelope"></i> Redexofficial@gmail.com</h6>
                </aside>


            </aside>
          
         
         
         </aside>



       </article>

        </section>
    );
};

export default Contact;
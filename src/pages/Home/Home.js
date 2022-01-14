import { useKeenSlider } from 'keen-slider/react';
import React from 'react';
import Auth from '../../Context/Auth';
import Appointmnet from './Appointmnet/Appointmnet';
import Departments from './Departments/Departments';
import Header from './Header/Header';
import Services from './Services/Services';

const Home = () => {
  
    const [sliderRef] = useKeenSlider({
        spacing: 10,
        slidesPerView: 1,
        centered: true,
        loop: true,
        mode: "snap",
        breakpoints: {
          "(min-width: 768px)": {
            slidesPerView: 2,
            mode: "free-snap",
          },
          "(min-width: 1200px)": {
            slidesPerView: 3,
            mode: "free-snap",
          },
        },
      });


    return (

        <Auth>
        
            {/* <Navbar /> */}
            <Header />
            <Services />
            <Departments />
            <Appointmnet />
            {/* <SignUpLogin /> */}
            <article style={{marginTop:"200px",marginBottom:"200px"}} >
          <h3 className="text-center mb-5">WHAT OUR PATIENTS SAYS</h3>
          <div ref={sliderRef} className="keen-slider">
            <div className=" keen-slider__slide number-slide1">
            <img style={{width:"100px",height:"100px",borderRadius:"50%",marginBottom:'10px',marginLeft:"43%",marginTop:"25px"}} src="https://image.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg" alt="" />
            <h5 className="text-center">Rahim Mehedi</h5>
            <p className="w-75 text-center ps-5 ms-5">hank you so much for your kind words, Jane. We really appreciate you taking the time out to share your experience with us</p>
                   
            </div>
             <div className="keen-slider__slide number-slide2">
             <img style={{width:"100px",height:"100px",borderRadius:"50%",marginBottom:'10px',marginLeft:"43%",marginTop:"25px"}} src="https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg" alt="" />
                    <h5 className="text-center">Mahim Rahman</h5>
                    <p className="w-75 text-center ps-5 ms-5">hank you so much for your kind words, Jane. We really appreciate you taking the time out to share your experience with us</p>
             </div>
           <div className="keen-slider__slide number-slide3">
           <img style={{width:"100px",height:"100px",borderRadius:"50%",marginBottom:'10px',marginLeft:"43%",marginTop:"25px"}} src="https://image.freepik.com/free-photo/mand-holding-cup_1258-340.jpg" alt="" />
                    <h5 className="text-center">Mahi Islam</h5>
                    <p className="w-75 text-center ps-5 ms-5">hank you so much for your kind words, Jane. We really appreciate you taking the time out to share your experience with us</p>
           </div>
           <div className="keen-slider__slide number-slide4">
           <img style={{width:"100px",height:"100px",borderRadius:"50%",marginBottom:'10px',marginLeft:"43%",marginTop:"25px"}} src="https://image.freepik.com/free-photo/mand-holding-cup_1258-340.jpg" alt="" />
                    <h5 className="text-center">Mahfuj Rahman</h5>
                    <p className="w-75 text-center ps-5 ms-5">hank you so much for your kind words, Jane. We really appreciate you taking the time out to share your experience with us</p>
           </div>
          <div className="keen-slider__slide number-slide5">
          <img style={{width:"100px",height:"100px",borderRadius:"50%",marginBottom:'10px',marginLeft:"43%",marginTop:"25px"}} src="https://image.freepik.com/free-photo/mand-holding-cup_1258-340.jpg" alt="" />
                    <h5 className="text-center">Rahim Ahmed</h5>
                    <p className="w-75 text-center ps-5 ms-5">hank you so much for your kind words, Jane. We really appreciate you taking the time out to share your experience with us</p>
          </div>
           <div className="keen-slider__slide number-slide6">
           <img style={{width:"100px",height:"100px",borderRadius:"50%",marginBottom:'10px',marginLeft:"43%",marginTop:"25px"}} src="https://image.freepik.com/free-photo/mand-holding-cup_1258-340.jpg" alt="" />
                    <h5 className="text-center">Siam Rahman</h5>
                    <p className="w-75 text-center ps-5 ms-5">hank you so much for your kind words, Jane. We really appreciate you taking the time out to share your experience with us</p>
           </div>
          </div>
          </article>
        </Auth>
    );
};

export default Home;
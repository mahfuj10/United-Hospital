import { createUserWithEmailAndPassword, getAuth,onAuthStateChanged, updateProfile  } from '@firebase/auth';
import userEvent from '@testing-library/user-event';
import React, { useImperativeHandle, useState  } from 'react';
import { Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import UseFirebase from '../../Hooks/UseFirebase';


const Regester = () => {

    const { setUser,setIsloading,user, HandaleSignUp,googleSignIn, error ,userName, userEmail, userPassword, userDisplayname } = useAuth();

    const history = useHistory()
    const location = useLocation();
    const redirect_url = location.state?.from || "/home"; 
    


    const handaleGoogelSignUp = () => {
        setIsloading(true)
                googleSignIn()
                 .then(() => {
                    history.push(redirect_url);
                 })
                 .finally(()=> setIsloading(false))
        }


const handaleRegester = () => {
    
    HandaleSignUp()
  
    setInterval(()=>{
        window.location.reload(true);
    },2000)
}
   
    return (
      
        <div>
             <p className="position-absolute text-danger" style={{marginTop:"0%",marginLeft:"25%"}}>{error}</p>
            <h4 className="mb-4">Sign Up</h4>
             
           <input onChange={userName} placeholder=" Name" type="text" />
           <input onChange={userEmail}  placeholder=" Email" type="email" />
           <input onChange={userPassword}  placeholder=" Password" type="password" /><input onClick={handaleRegester} type="submit" variant="danger" value="Sign Up" style={{backgroundColor:"#89ABE3"}}/>
          
           <small className="d-none d-lg-block">---------------- Or sign up with ----------------</small>
                <aside className="SocialIcon">
                    <span className="SignMethod"><i class="fab fa-facebook"></i></span>
                    <span className="SignMethod" onClick={handaleGoogelSignUp}><i class="fab fa-google"></i></span>
                </aside>
        </div>
    );
};

export default Regester;
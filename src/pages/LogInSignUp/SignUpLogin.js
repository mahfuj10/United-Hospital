import React, { useState } from 'react';
import Regester from './Regester';
import './SignUpLogin.css';
import UseFirebase from '../../Hooks/UseFirebase';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';


const handaleSignUp = () => {
    const formBox = document.getElementById("formBox");
    const body = document.querySelector(".body");
    formBox.classList.add("active");
    body.classList.add("active");
}
const handaleSignIn = () => {
    const formBox = document.getElementById("formBox");
    const body = document.querySelector(".body");
    formBox.classList.remove("active");
    body.classList.remove("active"); 
}


// const { GoogleSign } = UseAuth();

// 

const SignUpLogin = () => {

        const [ email, setEmail ] = useState('');
        const [ password, setPassword ] = useState('');
        
        const userLoginEmail = e => {
            setEmail(e.target.value)
        }
        const userLoginPassword = e => {
            setPassword(e.target.value)
        }

const { user, googleSignIn ,userLogin, userEmail, setUser, userPassword, setIsloading, isLoading} = useAuth();
        
        const auth = getAuth();
        
        const handalelogin = (e) => {
           
            e.preventDefault()
            signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                
                setUser(result.user)
            })
        }
 
    const history = useHistory()
    const location = useLocation();
    const redirect_url = location.state?.from || "/home"; 
    
    const handaleGoogelSign = () => {
    
setIsloading(true)
        googleSignIn()
         .then(() => {
            history.push(redirect_url);
         })
         .finally(()=> setIsloading(false))
    }



    return (

    <div className="body">    
        <div className="container">
        <div className="form-container">
            
            <div className="box signIn">
                <h3 className="ms-5 mb-5 mb-md-0 ms-md-0">Already Have an Account ?</h3>
                <button id="signinBtn" onClick={handaleSignIn} >Sign in</button>
            </div>

            <div className="box signUp">
                <h3 className="ms-5 mb-5 mb-md-0 ms-md-0">Don't Have an Account ?</h3>
                <button id="signupBtn" onClick={handaleSignUp}>Sign Up</button>
            </div>

        </div>

                {/* sign in box */}
        <div id="formBox">
            <div className="form signinForm">
            <form onSubmit={handalelogin}>
                {/* <span>{user.displayName}</span> */}
                <h3>Sign In</h3>
                <input onChange={userLoginEmail} type="email" placeholder="Enter your Email"/>
                <input onChange={userLoginPassword} type="password" placeholder="Enter your Password"/>
                {/* <button >Sign Out</button> */}
                <input type="submit" value="Sign In"  className=" p-2 submitBtn" /><br />
                <a href className="text-danger d-none d-lg-block text-center forgetText"> Forget Password ?</a><br /><br />
                <small className="d-none d-lg-block">----------------- Or sign in with -----------------</small>
                <aside className="SocialIcon">
                    <span  className="SignMethod"><i class="fab fa-facebook"></i></span>
                    <span className="SignMethod" onClick={handaleGoogelSign}><i class="fab fa-google"></i></span>
                </aside>
            </form>
            </div>

                    {/* sign up box */}
            <div className="form signUpForm">
               <Regester />
            </div>
        </div>

    
    </div>
    </div>
)
}
export default SignUpLogin;
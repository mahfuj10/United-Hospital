import {getAuth, signInWithPopup, GoogleAuthProvider,FacebookAuthProvider, onAuthStateChanged ,signOut,updateProfile,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import firebaseInitalize from "../Firebase/FirebaseInitalize";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
firebaseInitalize();



const UseFirebase = () => {
    // make a state
    const [ isLoading, setIsloading ] = useState(true);
    const auth = getAuth();
    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const [ user, setUser ] = useState({});

    const userName = e => {
        setName(e.target.value);
     }
     const userEmail = e => {
         setEmail(e.target.value);
     }
     const userPassword  = e => {
         setPassword(e.target.value);
     }


    const userLogin = ( ) => {
        signInWithEmailAndPassword ( auth, email, password )
        
        .then(result => {
          setUser(result.user)
        })
        .catch(error => {
          setError(error.message)
        })
      }

    const HandaleSignUp = () => {

 setIsloading(true)
      createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        userDisplayname();
        setUser(result.user)    
          }).catch(error => {
              setError(error.message)
          })
          setIsloading(false)
    }

// display user name
    const userDisplayname = () => {

      updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {}).catch((error) => {});
  }

// google sign
  
const googleSignIn = () => {

 return   signInWithPopup(auth, googleProvider)
    }
    
// facebook sign
    const signWithFacebook = () => {

     return signInWithPopup(auth, facebookProvider)
           
    }

useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
            setUser({});
        }
        setIsloading(false);
      });
},[])


      const LogOut = () => {
        setIsloading(true);
        signOut(auth)
         .then(()=>{
             setUser({})
         })
         .finally( () => setIsloading(false))
      }


return {
    googleSignIn,
    LogOut,
    user,
    error,
    signWithFacebook,
    userName,
    isLoading,
    setIsloading,
    userEmail,
    userPassword,
    userLogin,
    userDisplayname,
    setUser,
    HandaleSignUp

}


}

export default UseFirebase;

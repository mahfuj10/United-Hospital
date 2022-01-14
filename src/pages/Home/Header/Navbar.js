import React from 'react';
import { Link, NavLink ,useHistory} from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import UseFirebase from '../../../Hooks/UseFirebase';
import './Header.css';

const Navbar = () => {
    
    const linkStyle = {
        color:"#f07946",
        marginBottom:"2px solid red"
    }

const { user, LogOut } = useAuth();

    
const history = useHistory();
    
const handaleLoginPath = () => {
    history.push("/login");
}
const handaleSingUpPath = () => {
    history.push("/signup");
}


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/home" href className="navbar-brand webTitle" style={{marginLeft:"180px"}} >United Hospital</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink  className="nav-link active" activeStyle={linkStyle} aria-current="page" to='/home'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeStyle={linkStyle} to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeStyle={linkStyle} to="/doctors">Doctor</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeStyle={linkStyle} to="/blog">Blog</NavLink>
              </li>
            
              <li className="nav-item">
                <NavLink className="nav-link" activeStyle={linkStyle} to="/contact">Contact</NavLink>
              </li>
            
             
              
            </ul>
            {
                    user.email &&
                   <aside className="position-absolute userProfile" style={{marginLeft:"55%"}}>
                        <img className="rounded-circle" width="46" height="46" src={user?.photoURL} alt="" />
                    <span className="ms-2" style={{color:"#f07946"}}>{user?.displayName}</span>
                   </aside>
                }
                { 
                ! user.email ?
                 <aside>
                    <button onClick={handaleLoginPath}>Log In</button>
                    <button onClick={handaleSingUpPath}>Sign Up</button>
                </aside>  :
                <button onClick={LogOut}> Sign Out</button>
                }
          </div>
        </div>
      </nav>
      
    );
};

export default Navbar;
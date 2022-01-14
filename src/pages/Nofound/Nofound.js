import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import ErrorImg from '../../images/error.png';




const NoFound = () => {

    const history = useHistory();

const buttonHistory = () => { //onclick func
    history.push('/home');//set url
}

    const btnStyle = {
        fontSize: "12px",
        border: "1px solid #06043D",
        color: "#fff",
        backgroundColor: "#06043D",
        padding: "9px 30px",
        fontWeight: "500",
        position: "absolute", 
        marginLeft:"49%",
        marginTop:"23%",
        


    } 

const imgStyle = {
   display:"flex",
   justifyContent:"center"
}

    return (

        <div>
            <button onClick={buttonHistory} style={btnStyle}>Go To Home</button>
            <aside   style={imgStyle}>
                <img src={ErrorImg} alt="" />
            </aside>
        </div>
    );
};

export default NoFound;
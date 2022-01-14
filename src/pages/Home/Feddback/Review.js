import React, { useEffect, useState } from 'react';

const Review = () => {

    
  const [ customer, setCustomer ] = useState([]);
 
  useEffect( () => {
    fetch('Review.json')
      .then(result => result.json())
      .then(data => console.log(data))
 },[])

    return (
        <div>
            <h1>msadaiusdhsdihf</h1>
        </div>
    );
};

export default Review;
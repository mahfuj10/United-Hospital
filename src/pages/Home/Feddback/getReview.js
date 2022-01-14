import { useEffect, useState } from "react";

 const CustomerReview = () => {

    const [ customers, setCustomers ] = useState([]);
 
    useEffect( () => {
      fetch('Review.json')
        .then(result => result.json())
        .then(data => setCustomers(data))
   },[]);


   return {
       customers
   }
 }

 export default CustomerReview;
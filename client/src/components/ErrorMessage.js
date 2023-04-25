import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function ErrorMessage (){
    const navigate = useNavigate();

    useEffect(()=>{

    //   todo: Checkout doing a loader
        setTimeout(()=>{
                navigate(-1)
        },3000 );
    },[]);
    return(

        <h1>Page not found</h1>



    
)}

export default ErrorMessage;
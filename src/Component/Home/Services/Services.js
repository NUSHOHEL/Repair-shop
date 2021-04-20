import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Service.css'


const Services = () => {
    const [services, setServices]=useState([])
    useEffect(()=>{
        fetch('https://safe-cliffs-44982.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="mt-5 text-center">
            <p>WHAT WE DO</p>
            <h1><strong>Services</strong></h1>
    
                <div className="d-flex justify-content-around mt-5  flex-wrap">
                    {
                        services?.map(service=> <Link to={`/dashboard/${service.serviceName}`} className='service mt-4'style={{width:'330px', textDecoration:'none', boxShadow:'10px 10px 5px lightgrey', borderRadius:'10px',transition:'transform 2s', padding:'15px'}} key={service._id}>
                            <img src={service.image} style={{width:'100px', borderRadius:'10px'}} alt=""/>
                            <h3>{service.serviceName}</h3>
                            <p>{service.description}</p>
                            <p><strong>Start From ${service.price}</strong></p>
                        </Link>)
                    }
                </div> 
        </div>
    );
};

export default Services;
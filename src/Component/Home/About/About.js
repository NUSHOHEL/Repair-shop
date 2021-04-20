import {  faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faCog, faDollarSign, faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className=" text-center mt-5" style={{backgroundColor:'#F9F8F4'}}>
            
            <h1>Everybody has standards ours are just better.</h1>
            <h5>Explore new ways to see what’s working and fix what’s not. Vivamus sed finibus nulla. Suspendisse ac ex sed sem consequat pellentesque ain nulla.</h5>
           
                <div className="d-flex flex-wrap justify-content-around mt-5" style={{backgroundColor:'#F9F8F4'}}>
                   <div style={{width:'250px', boxShadow:'10px 10px 5px grey', borderRadius:'10px', marginTop:'20px'}}>
                        <FontAwesomeIcon size='2x' icon={faTools}/>
                        <h3>Quick Repair Process</h3>
                        <p>We are a best service provider for repair, contact us today to Schedule service with our qualified Technicians!</p>
                   </div>
                   <div style={{width:'250px', boxShadow:'10px 10px 5px grey', borderRadius:'10px', marginTop:'20px'}}>
                        <FontAwesomeIcon size='2x' icon={faCog}/>
                        <h3>Free Diagnostics</h3>
                        <p>We are a best service provider for repair, contact us today to Schedule service with our qualified Technicians!</p>
                   </div>
                   <div style={{width:'250px', boxShadow:'10px 10px 5px grey', borderRadius:'10px', marginTop:'20px'}}>
                        <FontAwesomeIcon size='2x' icon={faDollarSign}/>
                        <h3>Low Price Guarantee</h3>
                        <p>We are a best service provider for repair, contact us today to Schedule service with our qualified Technicians!</p>
                   </div>
                   <div style={{width:'250px', boxShadow:'10px 10px 5px grey', borderRadius:'10px', marginTop:'20px'}}>
                        <FontAwesomeIcon size='2x' icon={faCalendar}/>
                        <h3>90-Day Warranty</h3>
                        <p>We are a best service provider for repair, contact us today to Schedule service with our qualified Technicians!</p>
                   </div>
            
                </div>
        
        </div>
    );
};

export default About;
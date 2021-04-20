import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Footer.css"
const helpdesk = [
    { name: "Query your prblm"},
    { name: "Get professional advice" },
    { name: "Make an appointment"},
    { name: "Give us feedback" },
    
]
const ourAddress = [
    { name: "New York - 101010 Hudson", link: "//google.com/map" },
    { name: "Yards", link: "//google.com/map" },

]
const fixitPage = [
    { name: "FAQ"},
    { name: "Support" },
    { name: "Contact us" },
    { name: "Careers"},
    { name: "Team"},
    { name: "About"},
    
]
const services = [
    { name: "Smart phone Repair" },
    { name: "Tablate Repair" },
    { name: "Laptop Repair" },
    { name: "Tablet Repair" },
    { name: "Game Console" },
    { name: "Data Recovery" },
    
]

const Footer = () => {
    return (
        <div className='footer'>
            <div className="d-flex  justify-content-around  flex-wrap">
                <div className="mt-4">
                    <h3><strong>Help Desk</strong></h3>
                    {
                        helpdesk.map(emergency => <li style={{ width: '200px', margin: '15px', listStyle: 'none'}}>{emergency.name}</li>)
                    }
                </div>
                <div className="mt-4" >
                    <h3><strong>Services</strong></h3>
                    {
                        services.map(emergency => <li style={{ width: '200px', margin: '15px', listStyle: 'none' }}>{emergency.name}</li>)
                    }
                </div>
                <div className="mt-4">
                    <h3><strong>Fixit Page</strong></h3>
                    {
                        fixitPage.map(emergency => <li style={{ width: '200px', margin: '15px', listStyle: 'none' }}>{emergency.name}</li>)
                    }
                </div>
                <div className="mt-4">
                    <h3><strong>Our Address</strong></h3>
                    {
                        ourAddress.map(emergency => <li style={{ width: '200px', margin: '15px', listStyle: 'none' }}>{emergency.name}</li>)
                    }
                    <ul className="social-media list-inline">
                        <li className="list-inline-item" style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#1cc7ca', textAlign: 'center', padding: '15px' }}> <a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a>  </li>


                        <li style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#1cc7ca', textAlign: 'center', padding: '15px' }} className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>

                        <li style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#1cc7ca', textAlign: 'center', padding: '15px' }} className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                    </ul>
                    <div className="mt-5">
                        <h6>Call now</h6>
                        <button className="btn btn-primary">+2025550295</button>
                    </div>
                </div>
            </div>

            <div className="mt-5 p-3 text-center">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
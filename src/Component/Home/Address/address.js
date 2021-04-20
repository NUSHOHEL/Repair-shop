import { faAddressCard, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import map from '../../../images/map.png'

const Address = () => {
    return (
        <div style={{border:'2px solid greed', padding:'50px', backgroundColor:'lightgray'}}>
           <div className="d-flex justify-content-around flex-wrap">
               <div style={{width:'400px', padding:'30px'}}>
                    <div className="d-flex ">
                        <FontAwesomeIcon className="m-3" size="3x" icon={faAddressCard}/>
                        <div>
                            <h2>Address</h2>
                        <p>73 Canal Street, New York, NY</p>
                        </div>
                    </div>
                    <div className="d-flex ">
                        <FontAwesomeIcon className="m-3" size="3x" icon={faPhone}/>
                        <div>
                            <h2>Contact</h2>
                        <p>+880 1850595642</p>
                        </div>
                    </div>
                    <div className="d-flex ">
                        <FontAwesomeIcon className="m-3" size="3x" icon={faEnvelope}/>
                        <div>
                            <h2>Email</h2>
                        <p>nushohel2@gmail.com</p>
                        </div>
                    </div>
               </div>
               <div style={{width:'400px', marginTop:'30px'}}>
                        <img style={{width:'370px', borderRadius:'15px'}} src={map} alt=""/>
               </div>
           </div>
        </div>
    );
};

export default Address;
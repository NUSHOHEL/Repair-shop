/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import  firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../fireconfig/fireconfig';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import './Login.css'

const Login = () => {
    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email, photoURL} = result.user;
            console.log(result.user)
            const signedInUser = {name: displayName, email, photoURL} 
            console.log(signedInUser)
            setLoggedInUser(signedInUser);

            history.replace(from);
            // ...
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    return (
        <div className="">
            <form >
  <div className="loging-form">
   <div className='text-center'>
       <h3><strong>Create Account</strong></h3>
   </div>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
    <hr/>
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

    <button type="submit" className="registerbtn">Register</button>
    <p>Already have an account? <a href="#">Sign in</a>.</p>
    <div className='text-center'>
        <h4><strong>Or</strong></h4>
        <button className='btn btn-primary' onClick={handleGoogleSignIn}>Cotinue With Google</button>
    </div>
  </div>
  
</form>

               
    </div>

           
        
    );

};

export default Login;
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const NavBar = () => {
  // eslint-disable-next-line no-unused-vars
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser)
  const [admin, setAdmin] = useState(false)

  useEffect(() => {
      fetch('https://safe-cliffs-44982.herokuapp.com/isAdmin', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ email: loggedInUser.email })
      })
          .then(res => res.json())
          .then(data => {
              console.log(data)
              setAdmin(data)
          });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark p-2 bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Fixar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to='/home' className="nav-link me-5">Home</Link>
        <Link to="/About" className="nav-link me-5" href="#">About</Link>
        <a className="nav-link me-5" href="#">Service</a>
        <a className="nav-link me-5" href="#">Contact</a>
        {
          admin?<Link to='/dashboard' className="nav-link me-5" href="#">Admin</Link>:<Link to='/dashboard' className="nav-link me-5" href="#">Cart</Link>
        }
        {
          loggedInUser?<Link to="/login" className="nav-link me-5" href="#">Log out</Link>:<Link to="/login" className="nav-link me-5" href="#">Login</Link>
        }
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default NavBar;
import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Route
        {...rest}
        render={({ location }) =>
            loggedInUser.email ? (
                children
            ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
        }
    />
    );
};

export default PrivateRoute;
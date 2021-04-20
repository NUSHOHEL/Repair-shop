import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import Dashboard from './Component/DashBoard/Dashboard/Dashboard';
import { createContext, useState } from 'react';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
// import NavBar from './Component/Shared/NavBar/NavBar';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      {/* <NavBar/ */}
      <Switch>
        <Route exact path='/'>
        <Home/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <PrivateRoute path="/dashboard/:name">
          <Dashboard/>
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <Dashboard/>
        </PrivateRoute>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    
    </Router>
    </UserContext.Provider>
  );
}

export default App;

import { Home, Login, Registration, _404 } from './Components/components';
import './App.css';
import React from 'react';
import {BrowserRouter, Redirect, Switch} from 'react-router-dom';
import PrivateRoute from './CustomRoutes/PrivateRoute';
import PublicRoute from './CustomRoutes/PublicRoute';
import LandingPage from './Components/LandingPage/LandingPage'
import VendorMarketplace from './Components/VendorMarketplace/VendorMarketplace';

function App () {
  return (
    <BrowserRouter>
        <Switch>
<<<<<<< HEAD
          <PublicRoute restricted={true} exact path='/' component = {Landing}/>
          <PublicRoute path='/home' component = {Home}/>
=======
          <PublicRoute restricted={false} exact path='/' component = {LandingPage}/>
          <PrivateRoute path='/home' component = {Home}/>
>>>>>>> c8dcf6eb48baad7471a79c373cad438e655cb6a5
          <PublicRoute restricted={true} path='/login' component={Login}/>
          <PublicRoute restricted={true} path='/register'
            component={Registration}/>
          <PublicRoute restricted={false} path='/market' component={VendorMarketplace}/>
          <PublicRoute restricted={false} path='/404' component = {_404}/>
          <Redirect to='/404' />
        </Switch>
      </BrowserRouter>
  );
}

export default App;

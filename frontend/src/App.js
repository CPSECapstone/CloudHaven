import { Home, JsDemo, Login, Registration, _404 } from './Components/components';
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
          <PublicRoute restricted={false} exact path='/' component = {LandingPage}/>
          <PrivateRoute path='/home' component = {Home}/>
          <PublicRoute restricted={true} path='/login' component={Login}/>
          <PublicRoute restricted={true} path='/JsDemo' component={JsDemo}/>
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

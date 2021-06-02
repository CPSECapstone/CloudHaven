import { Home, Login, Registration, _404 } from './Components/components';
import './App.css';
import React, { useEffect, useState } from "react";
import {BrowserRouter, Redirect, Switch} from 'react-router-dom';
import PrivateRoute from './CustomRoutes/PrivateRoute';
import PublicRoute from './CustomRoutes/PublicRoute';
import LandingPage from './Components/LandingPage/LandingPage'
import VendorMarketplace from './Components/VendorMarketplace/VendorMarketplace';
import axios from 'axios';

const App = (props) => {
  const [vendorRoutes, setVendorRoutes] = useState([]);

  useEffect(() => {
    const getVendorRoutes = async () => {
      try {
        const response = await axios('/vendors');
        for (const item of response.data) {
          setVendorRoutes(vendorRoutes => [...vendorRoutes, item.home_route])
        }
      } catch (err) {
        console.log(err + ' | Failed to get all vendors');
      }
    };
    getVendorRoutes();

    if (props.setUpdateApp) {
      props.setUpdateApp(false);
    }
  }, [props.updateApp]);

  const populateRoutes = () => {
    console.log(vendorRoutes);
    return (vendorRoutes).map((pathName) => {
      return (
        <PublicRoute restricted={false} path={pathName} component = {VendorMarketplace}/>
      );
    })
  }

  return (
    <BrowserRouter>
        <Switch>
          <PublicRoute restricted={false} exact path='/' component = {LandingPage}/>
          <PrivateRoute path='/home' component = {Home}/>
          <PublicRoute restricted={true} path='/login' component={Login}/>
          <PublicRoute restricted={true} path='/register'
            component={Registration}/>
          <PublicRoute restricted={false} path='/market' component={VendorMarketplace}/>
          {populateRoutes()}
          <PublicRoute restricted={false} path='/404' component = {_404}/>
          <Redirect to='/404' />
        </Switch>
      </BrowserRouter>
  );
}

export default App;

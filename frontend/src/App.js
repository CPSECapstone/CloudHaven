import { Home, Login, Registration, _404 } from './Components/components';
import './App.css';
import React from 'react';
import {BrowserRouter, Redirect, Switch} from 'react-router-dom';
import PrivateRoute from './CustomRoutes/PrivateRoute';
import PublicRoute from './CustomRoutes/PublicRoute';
import Landing from './Components/Landing/Landing';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <PublicRoute restricted={true} exact path='/' component = {Landing}/>
          <PrivateRoute path='/home' component = {Home}/>
          <PublicRoute restricted={true} path='/login' component={Login}/>
          <PublicRoute restricted={true} path='/register'
            component={Registration}/>
          <PublicRoute restricted={false} path='/404' component = {_404}/>
          <Redirect to='/404' />
        </Switch>
      </BrowserRouter>
  );
}

export default App;

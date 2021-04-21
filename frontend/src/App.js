import './App.css';
import React from 'react';
import {BrowserRouter, Redirect, Switch} from 'react-router-dom';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import Homepage from './Homepage/Homepage';
import PrivateRoute from './CustomRoutes/PrivateRoute';
import PublicRoute from './CustomRoutes/PublicRoute';
import Landing from './Homepage/Landing';
import _404 from './404/404';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <PublicRoute restricted={true} exact path='/' component = {Landing}/>
          <PrivateRoute path='/home' component = {Homepage}/>
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

import { Home, Login, Registration, _404, VendorApp, VendorMarketplace } from './Components/components';
import './App.css';
import React from 'react';
import {BrowserRouter, Redirect, Switch} from 'react-router-dom';
import PrivateRoute from './CustomRoutes/PrivateRoute';
import PublicRoute from './CustomRoutes/PublicRoute';
import LandingPage from './Components/LandingPage/LandingPage'

// hard-coded app paths for the sake of demo
const PATH_ID_TESTSERVICE = {'path': '/TestService', 'vendorId': '6091d404d59714e9c0f267d9'};
const PATH_ID_EMAIL = {'path': '/Email', 'vendorId': '6091d45f6ca38c04eebc128e'};
const PATH_ID_ONEDRIVE = {'path': '/OneDrive', 'vendorId': '6091d46d6ca38c04eebc128f'};
const PATH_ID_SAMPLEFLOW = {'path': '/SampleFlow', 'vendorId': '6091d47c6ca38c04eebc1290'};
const PATH_ID_GOOGLESHEETS = {'path': '/GoogleSheets', 'vendorId': '6091d48c6ca38c04eebc1291'};
const PATH_ID_GOOGLEDOCS = {'path': '/GoogleDocs', 'vendorId': '60a5c3a2fa10a57099645d48'};

function App () {

  return (
    <BrowserRouter>
        <Switch>
          <PublicRoute restricted={true} exact path='/' component = {LandingPage}/>
          <PrivateRoute path='/home' component = {Home}/>
          <PublicRoute restricted={true} path='/login' component={Login}/>
          <PublicRoute restricted={true} path='/register'
            component={Registration}/>
          <PublicRoute restricted={false} path='/market' component={VendorMarketplace}/>

          {/* hard-coded app paths for the sake of demo */}
          <PublicRoute restricted={false} path={PATH_ID_TESTSERVICE['path']} 
            component={VendorApp} 
            vendorId={PATH_ID_TESTSERVICE['vendorId']}/>
          <PublicRoute restricted={false} path={PATH_ID_EMAIL['path']}
            component={VendorApp}
            vendorId={PATH_ID_EMAIL['vendorId']} />
          <PublicRoute restricted={false} path={PATH_ID_ONEDRIVE['path']} component={VendorMarketplace}/>
          <PublicRoute restricted={false} path={PATH_ID_SAMPLEFLOW['path']} component={VendorMarketplace}/>
          <PublicRoute restricted={false} path={PATH_ID_GOOGLESHEETS['path']} component={VendorMarketplace}/>
          <PublicRoute restricted={false} path={PATH_ID_GOOGLEDOCS['path']} component={VendorMarketplace}/>
          <PublicRoute restricted={false} path='/404' component = {_404}/>
          <Redirect to='/404' />
        </Switch>
      </BrowserRouter>
  );
}

export default App;

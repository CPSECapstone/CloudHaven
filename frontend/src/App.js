import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage'
import { Home } from './Components/components'

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={Home} />
      </Switch>
    </Router>
  )
}

export default App

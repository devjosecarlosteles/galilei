import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from './pages/Home'

function Routes () {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ Home } />
      </Switch>
    </Router>
  )
}

export default Routes
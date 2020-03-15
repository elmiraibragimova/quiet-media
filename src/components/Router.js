import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to="/params" />
      <Route path="/:target" component={App} />
    </Switch>
  </BrowserRouter>
)

export default Router

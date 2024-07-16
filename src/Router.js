import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from './Components/Product';
import Frontoffice from './Pages/Frontoffice';
function Router() {
  return (
    <Router>
        <Switch>
            <Route exact path="/frontoffice" Component={Frontoffice}>
            </Route>
        </Switch>
    </Router>
  )
}

export default Router
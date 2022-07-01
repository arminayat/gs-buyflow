import React from 'react'
import logo from './assets/images/logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Buyflow from './buyflow'
import { ProductIds } from './buyflow/types'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/buy/insurance-designers">
            <Buyflow productId={ProductIds.designerInsurance} />
          </Route>
          <Route path="/buy/insurance-developers">
            <Buyflow productId={ProductIds.developerInsurance} />
          </Route>
          <Route path="/">
            <p>Welcome to Getsafe Insurance. Lets get started!</p>
            <Link to="/buy/insurance-developers">developer insurance</Link>
            <br />
            <br />
            <Link to="/buy/insurance-designers">designer insurance</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

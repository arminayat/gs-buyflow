import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Buyflow from './buyflow'
import { ProductIds } from './buyflow/types'
import Menu from './menu'
import Layout from './layout'

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/buy/insurance-designers">
            <Buyflow productId={ProductIds.designerInsurance} />
          </Route>
          <Route path="/buy/insurance-developers">
            <Buyflow productId={ProductIds.developerInsurance} />
          </Route>
          <Route path="/">
            <Menu />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App

import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './screens/Home'
import Search from './screens/Search'
import Favourites from './screens/Favourites'
import Account from './screens/Account'
import Add from './screens/Add'

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/search' component={Search} />
      <Route exact path='/add' component={Add} />
      <Route exact path='/favourites' component={Favourites} />
      <Route exact path='/account' component={Account} />
    </Router>
  )
}

export default App

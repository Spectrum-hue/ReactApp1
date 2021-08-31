import React from 'react'
//components imports
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Stocks from './components/Stocks'
//the router imports to use routing from one to another component from the navbar.
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css'
//styling imports
import './App.css'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css'
          integrity='sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l'
          crossorigin='anonymous'
        />

        <Router>
          <Switch>
            <Route exact={true} path='/' component={Home} />
            <Route exact path='/stocks' component={Stocks} />
            <Route exact path='/about' component={About} />
            <Route exact path='/login' component={Login}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
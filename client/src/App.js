import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './routes/home.js'
import Login from './routes/login.js'



class App extends Component {

  render() {

    return(
      <div>
        <Router>
          <div>
            <Route exact path ="/" component={Login} />
            <Route path="/home" component={Home}   />
          </div>
        </Router>
      </div>
      )
  }
}

export default App
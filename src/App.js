import React, { Component } from 'react';
import './App.css';
import {BrowserRouter , Switch, Route} from 'react-router-dom'
import Intro from './pages/Intro'
import Catagory from './pages/catagory'
import About from './pages/About'
import Quiz from './pages/Quiz'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Intro} />
          <Route path='/catagory' component={Catagory} />
          <Route path='/about' component={About} />
          <Route path="/quiz" component={Quiz} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;

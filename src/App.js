import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {

  newsCategory = ['business', 'entertainment', 'health', 'science', 'sports', 'technology']

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar color='#f11946' progress={this.state.progress} />
          <Switch>
            <Route exact path='/home'>
              <News key='home' setProgress={this.setProgress} country='in' category='general' pageSize={12} />
            </Route>
            <Route exact path='/'>
              <News key='home2' setProgress={this.setProgress} country='in' category='general' pageSize={12} />
            </Route>
            {this.newsCategory.map((ele) => {
              return (
                <Route exact path={'/' + ele}>
                  <News key={ele} setProgress={this.setProgress} country='in' category={ele} pageSize={12} />
                </Route>)
            })
            }
          </Switch>
        </Router>
      </>
    )
  }
}


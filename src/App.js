import './App.css';
import Navbar from './components/Navbar'
import News from './components/News'

import React, { Component } from 'react'

export default class App extends Component {

  render() {
    return (
      <>
        <Navbar />
        <News
          country='in'
          apiKey='8ce5b726e522439f8626ebb24c2aa4c4'
          category='sport'
          pageSize='10' />
      </>
    )
  }
}


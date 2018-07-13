import React, { Component } from 'react';
import {handleInitialData} from '../actions/shared'
import {connect} from 'react-redux'
import Navi from './Navi'
import SignIn from './SignIn'

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <Navi />
        <SignIn />
      </div>
    );
  }
}

//funkcja connect sprawia, ze App dostaje dostep do glownego store'a Reduxowego :)

export default connect()(App);

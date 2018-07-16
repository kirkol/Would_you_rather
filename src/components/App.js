import React, { Component, Fragment } from 'react';
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navi from './Navi'
import SignIn from './SignIn'
import Home from './Home'
import Question from './Question'
import UsersBoard from './UsersBoard'
import NewQuestion from './NewQuestion'
import {
  Row, Col
} from 'reactstrap'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Navi />
          <Route path='/' exact component={SignIn} />
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Route path='/userboard' component={UsersBoard} />
              <Route path='/new' component={NewQuestion} />
            </Col>
          </Row>
        </Fragment>
      </Router>
    );
  }
}

//funkcja connect sprawia, ze App dostaje dostep do glownego store'a Reduxowego :)

export default connect()(App);

import React, { Component, Fragment } from 'react';
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import Navi from './Navi'
import SignIn from './SignIn'
import Home from './Home'
import UsersBoard from './UsersBoard'
import NewQuestion from './NewQuestion'
import Question from './Question'
import Result from './Result'
import {
  Row, Col
} from 'reactstrap'


class App extends Component {

  componentWillMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
            <Navi />
            {this.props.authedUser?
              (<Fragment>
                <Row>
                  <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Route path='/' exact component={Home} />
                    <Route path='/userboard' component={UsersBoard} />
                    <Route path='/new' component={NewQuestion} />
                    <Route path='/question/:id' render={() => (
                      <Question
                        id={(window.location.href).split("/").pop()}
                      />
                    )} />
                    <Route path='/result/:id' render={() => (
                      <Result
                        id={(window.location.href).split("/").pop()}
                      />
                    )} />
                  </Col>
                </Row>
              </Fragment>)
              :
              (<Fragment>
                <Route path='/' exact component={SignIn} />
                <Row>
                  <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Route path='/userboard' component={UsersBoard} />
                  </Col>
                </Row>
              </Fragment>)}
        </Fragment>
      </Router>
    );
  }
}

// mapStateToProps dostaje kawałek głownego store'a - tym kawałkiem jest authedUser
// wrzuca je do komponentu App jako props
// jesli wystapi akcja, ktora zmieni authedUser w glownym Storze, to kopniety w dupsko zostanie tez
// komponent App - nastapi jego przerenderowanie (jak po setState)

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}

//funkcja connect sprawia, ze App dostaje dostep do glownego store'a Reduxowego :)

export default connect(mapStateToProps)(App);

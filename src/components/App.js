import React, { Component, Fragment } from 'react';
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import Navi from './Navi'
import SignIn from './SignIn'
import Home from './Home'
import LeaderBoard from './LeaderBoard'
import AddQuestion from './AddQuestion'
import Question from './Question'
import Result from './Result'
import NoPage404 from './NoPage404'
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
          <LoadingBar />
          <Navi />
          {this.props.loading == false
            ?
            (this.props.authedUser ?
              (<Fragment>
                <Row>
                  <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Switch>
                      <Route path='/' exact component={Home} />
                      <Route path='/leaderboard' component={LeaderBoard} />
                      <Route path='/add' component={AddQuestion} />
                      {this.props.tab === "unanswered" ?
                      (<Route path='/questions/:question_id' render={() => (
                        <Question
                          id={(window.location.href).split("/").pop()}
                        />
                      )} />)
                      :
                      (<Route path='/questions/:question_id' render={() => (
                        <Result
                          id={(window.location.href).split("/").pop()}
                        />
                      )} />)}
                      <Route component={NoPage404} />
                    </Switch>
                  </Col>
                </Row>
              </Fragment>)
              :
              (<Fragment>
                <Route component={SignIn} />
              </Fragment>))
            :
            ("")
          }
        </Fragment>
      </Router>
    );
  }
}

// mapStateToProps dostaje kawałek głownego store'a - tym kawałkiem jest authedUser
// wrzuca je do komponentu App jako props
// jesli wystapi akcja, ktora zmieni authedUser w glownym Storze, to kopniety w dupsko zostanie tez
// komponent App - nastapi jego przerenderowanie (jak po setState)

function mapStateToProps({ authedUser, loadingBar, tab }) {
  return {
    tab,
    authedUser,
    loading: loadingBar.default
  }
}

//funkcja connect sprawia, ze App dostaje dostep do glownego store'a Reduxowego :)

export default connect(mapStateToProps)(App);

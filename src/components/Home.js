import React, { Component } from 'react'
import QuestionsUnanswered from './QuestionsUnanswered';
import QuestionsAnswered from './QuestionsAnswered';
import { toggleTab } from '../actions/tab';
import { connect } from 'react-redux'

class Home extends Component {

  handleClick = (tab) => {
    this.props.dispatch(toggleTab(tab))
  }

  render() {
    const {tab} = this.props
    return (
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <p 
            onClick={(e) => this.handleClick("unanswered")} 
            className={tab==="unanswered" ? "nav-link active" : "nav-link"} 
            style={{ scolor: '#595959' }}>Unanswered questions</p>
          </li>
          <li className="nav-item">
            <p 
            onClick={(e) => this.handleClick("answered")} 
            className={tab==="answered" ? "nav-link active" : "nav-link"} 
            style={{ color: '#595959' }}>Answered questions</p>
          </li>
        </ul>
        {tab === "unanswered"
        ?
        (<QuestionsUnanswered />)
        :
        (<QuestionsAnswered />)}
      </div>
    )

  }
}

function mapStateToProps({ tab }) {
  return {
    tab
  }
}

export default connect(mapStateToProps)(Home)
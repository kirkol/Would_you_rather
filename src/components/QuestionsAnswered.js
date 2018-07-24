import React, { Component } from 'react'
import QuestionPreview from './QuestionPreview';
import {connect} from 'react-redux'

class QuestionsAnswered extends Component {
  
  render() {

    return (
      <div>
        {this.props.questionsIds.map((id) => (
          <li key={id} style={{listStyleType: "none"}}>
            <QuestionPreview id={id} />
          </li>
        ))}
      </div>
    )
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  const arrayOfUsersAnsweredQuestions = Object.keys(users[authedUser].answers)
  return {
    user: users[authedUser],
    users,
    questionsIds: Object.keys(questions)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
      .filter((key) =>  arrayOfUsersAnsweredQuestions.includes(key))
  }
}

export default connect(mapStateToProps)(QuestionsAnswered)

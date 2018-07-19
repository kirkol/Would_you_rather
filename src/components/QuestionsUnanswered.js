import React, { Component } from 'react'
import QuestionPreview from './QuestionPreview';
import { connect } from 'react-redux'

class QuestionsUnanswered extends Component {
  render() {

    const { user, questions, users } = this.props
    //find answered questions
    const arrayOfUsersAnsweredQuestions = Object.keys(user.answers)
    const questionsUnansweredByUser = Object.keys(questions)
      .filter(key => !arrayOfUsersAnsweredQuestions.includes(key))
      .reduce((obj, key) => {
        obj[key] = questions[key];
        return obj
      }, {})

    return (
      <div>
        {Object.keys(questionsUnansweredByUser).map((q => (
          <QuestionPreview 
          key={q} 
          question={questionsUnansweredByUser[q]}
          user={users[questionsUnansweredByUser[q].author].name}
          avatar={users[questionsUnansweredByUser[q].author].avatarURL}
          view={"question"}/>
        )))}
      </div>
    )
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  return {
    user: users[authedUser],
    users,
    questions
  }
}

export default connect(mapStateToProps)(QuestionsUnanswered)
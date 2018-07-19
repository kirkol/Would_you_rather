import React, { Component } from 'react'
import QuestionPreview from './QuestionPreview';
import {connect} from 'react-redux'

class QuestionsAnswered extends Component {
  
  render() {

    const {user, questions, users} = this.props
    //find answered questions
    const arrayOfUsersAnsweredQuestions = Object.keys(user.answers)
    const questionsAnsweredByUser = Object.keys(questions)
      .filter(key => arrayOfUsersAnsweredQuestions.includes(key))
      .reduce((obj, key) => {
        obj[key] = questions[key];
        return obj
      }, {})

    return (
      <div>
        {Object.keys(questionsAnsweredByUser).map((q => (
          <QuestionPreview 
          key={q} 
          question={questionsAnsweredByUser[q]}
          user={users[questionsAnsweredByUser[q].author].name}
          avatar={users[questionsAnsweredByUser[q].author].avatarURL}
          view={"result"}/>
        )))}
      </div>
    )
  }
}

function mapStateToProps({questions, authedUser, users}){
  return{
    user: users[authedUser],
    users,
    questions
  }
}

export default connect(mapStateToProps)(QuestionsAnswered)

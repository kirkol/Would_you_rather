import React, { Component } from 'react'
import {
  Form, FormGroup, Label, Input, Button, Card, Row, Col, CardText, CardTitle
} from 'reactstrap'
import Avatar from 'react-avatar'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {handleAnswerQuestion} from '../actions/questions'
import { toggleTab } from '../actions/tab';

class Question extends Component {

  handleClick = (e, answer) => {
    e.preventDefault();
    const {authedUser, question} = this.props

    if(answer == false){
      alert("You have to choose your answer first :)")
    }else{
      this.props.dispatch(handleAnswerQuestion({authedUser:authedUser, qid:question.id, answer:answer}))
      this.props.dispatch(toggleTab("answered"))
      this.props.history.push(`/question/${this.props.id}`)
    }
  }

  render() {
    const { question, user } = this.props
    let answer = ""
    return (
      <div>
        <Card body>
          <CardTitle>{user.name} asks</CardTitle>
          <hr />
          <Row>
            <Col xs="2" style={{ display: 'block', marginLeft: '10px', paddingRight: '120px', width: '100%' }}>
              <Avatar size="100px" name="Kuba" round={true} src={user.avatarURL} />
            </Col>
            <Col xs="8" style={{ borderLeft: 'thin solid #d9d9d9', paddingLeft: '30px' }}>
              <CardText><b>WOULD YOU RATHER:</b></CardText>
              <Row>
                <Form>
                  <FormGroup tag="fieldset">
                    <FormGroup check>
                      <Label check>
                        <Input onChange={(e) => answer="optionOne"} type="radio" name="radio1" />{' '}
                        {question.optionOne["text"]}
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input onChange={(e) => answer="optionTwo"} type="radio" name="radio1" />{' '}
                        {question.optionTwo["text"]}
                      </Label>
                    </FormGroup>
                  </FormGroup>
                  <hr />
                  <Button
                    onClick={(e) => { this.handleClick(e, answer) }}
                    style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '90%' }}>
                    Submit
                  </Button>
                </Form>
              </Row>
            </Col>
          </Row>
        </Card>
      </div>
    )
  }
}

function mapStateToProps({ questions, users, authedUser }, { id }) {
  return {
    authedUser,
    question: questions[id],
    user: users[questions[id].author]
  }
}

export default withRouter(connect(mapStateToProps)(Question))
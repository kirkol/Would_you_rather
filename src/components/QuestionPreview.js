import React, { Component } from 'react'
import {
  Card, CardText, CardTitle, Button, Row, Col
} from 'reactstrap'
import {withRouter} from 'react-router-dom'
import Avatar from 'react-avatar'
import {connect} from 'react-redux'

class QuestionPreview extends Component {

  handleClick = (e, id) => {
    e.preventDefault();
      this.props.history.push(`/questions/${id}`)
  }

  render() {
    const {question, users} = this.props
    return (
      <div>
        <Card body>
          <CardTitle>{users[question.author].name} asks</CardTitle>
          <hr />
          <Row>
            <Col xs="2" style={{display: 'block', marginLeft: '10px', paddingRight: '120px', width: '100%'}}>
            <Avatar size="100px" name="Kuba" round={true} src={users[question.author].avatarURL} />
            </Col>
            <Col xs="8" style={{borderLeft:'thin solid #d9d9d9'}}>
              <CardText><b>WOULD YOU RATHER:</b></CardText>
              <Row>
                <Col sm="6" style={{overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis', width:'100px'}}>
                {question.optionOne["text"]}
                </Col>
                <Col sm="6" style={{overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis', width:'100px'}}>
                {question.optionTwo["text"]}
                </Col>
              </Row>
              <hr />
              <Button 
              style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '90%'}}
              onClick={(e) => this.handleClick(e, question.id)}
              >VIEW</Button>
            </Col>
          </Row>
        </Card>
      </div>
    )
  }
}

function mapStateToProps({questions, users}, {id}){
  return{
    question: questions[id],
    users
  }
}

export default withRouter(connect(mapStateToProps)(QuestionPreview))
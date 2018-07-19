import React, { Component } from 'react'
import {
  Form, FormGroup, Label, Input, Button, Card, Row, Col, CardText, CardTitle
} from 'reactstrap'
import Avatar from 'react-avatar'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'

class Question extends Component {

  handleClick = (e) => {
    e.preventDefault();
    this.props.history.push(`/result/${this.props.id}`)
  }

  render() {
    const {question, user} = this.props
    {console.log("QUESTIONS PROPS", this.props)}
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
                        <Input type="radio" name="radio1" />{' '}
                        {question.optionOne["text"]}
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        {question.optionTwo["text"]}
                      </Label>
                    </FormGroup>
                  </FormGroup>
                  <hr />
                  <Button onClick={(e) => {this.handleClick(e)}} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '90%' }}>Submit</Button>
                </Form>
              </Row>
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
    user: users[questions[id].author]
  }
}

export default withRouter(connect(mapStateToProps)(Question))
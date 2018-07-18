import React, { Component } from 'react'
import {
  Card, CardText, CardTitle, Button, Row, Col, Progress
} from 'reactstrap'
import Avatar from 'react-avatar'
import { connect } from 'react-redux'

class Result extends Component {
  render() {
    console.log("RESULTS PROPS", this.props)
    const {user, question} = this.props
    const votes1 = question.optionOne["votes"].length
    const votes2 = question.optionTwo["votes"].length

    return (
      <div>
        <Card body>
          <CardTitle>Asked by {user.name}</CardTitle>
          <hr />
          <Row>
            <Col xs="2" style={{ display: 'block', marginLeft: '10px', paddingRight: '120px', width: '100%' }}>
              <Avatar size="100px" name="Kuba" round={true} src={user.avatarURL} />
            </Col>
            <Col xs="9" style={{ borderLeft: 'thin solid #d9d9d9' }}>
              <CardText><b>Results:</b></CardText>
              <div style={{ border: 'thin solid #d9d9d9', borderRadius:'35px', padding:'20px' }}>
              <p>{question.optionOne["text"]}</p>
              <div className="text-center">{100*votes1/(votes1+votes2)}%</div>
              <Progress value={100*votes1/(votes1+votes2)} color="info" />
              <p style={{textAlign: 'center'}}>{votes1 + "/" + (votes1+votes2)}</p>
              </div>
              <br />
              <div style={{ border: 'thin solid #d9d9d9', borderRadius:'35px', padding:'20px' }}>
              <p>{question.optionTwo["text"]}</p>
              <div className="text-center">{100*votes2/(votes1+votes2)}%</div>
              <Progress value={100*votes2/(votes1+votes2)} color="info" />
              <p style={{textAlign: 'center'}}>{votes2 + "/" + (votes1+votes2)}</p>
              </div>
              <hr />
              <Button style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '90%' }}>BACK</Button>
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

export default connect(mapStateToProps)(Result)
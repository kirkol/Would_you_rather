import React, { Component } from 'react'
import {
  Card, CardText, CardTitle, Button, Row, Col, Progress
} from 'reactstrap'
import Avatar from 'react-avatar'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NoPage404 from './NoPage404';

class Result extends Component {
  handleClick = (e) => {
    e.preventDefault()
    this.props.history.push("/")
  }

  render() {
    const { user, question, authedUser } = this.props
    
    if(user===null){
      return(
        <NoPage404 />
      )
    }

    const votes1 = question.optionOne["votes"].length
    const votes2 = question.optionTwo["votes"].length

    const isUserChoose = question.optionOne["votes"].includes(authedUser)

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
              <div style={{ border: isUserChoose ? ('thick solid #17a2b8'):('thin solid #d9d9d9'), borderRadius: '35px', padding: '20px' }}>
                <p>{question.optionOne["text"]}</p>
                <div className="text-center">{100 * votes1 / (votes1 + votes2)}%</div>
                <Progress value={100 * votes1 / (votes1 + votes2)} color="info" />
                <p style={{ textAlign: 'center' }}>{votes1 + "/" + (votes1 + votes2)}</p>
              </div>
              <br />
              <div style={{ border: !isUserChoose ? ('thick solid #17a2b8'):('thin solid #d9d9d9'), borderRadius: '35px', padding: '20px' }}>
                <p>{question.optionTwo["text"]}</p>
                <div className="text-center">{100 * votes2 / (votes1 + votes2)}%</div>
                <Progress value={100 * votes2 / (votes1 + votes2)} color="info" />
                <p style={{ textAlign: 'center' }}>{votes2 + "/" + (votes1 + votes2)}</p>
              </div>
              <hr />
              <Button 
              onClick={(e) => this.handleClick(e)} 
              style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '90%' }}>BACK</Button>
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
    user: questions[id] ? users[questions[id].author] : null
  }
}

export default withRouter(connect(mapStateToProps)(Result))
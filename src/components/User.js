import React, { Component } from 'react'
import { Card, CardTitle, Col, Row, CardText, Button } from 'reactstrap'
import Avatar from 'react-avatar'

class User extends Component {

  render() {
    {console.log("PROPSY W USERZE",this.props)}
    const {user} = this.props
    return (
      <div>
        <Card body>
          <Row>
            <Col xs="2" style={{ display: 'block', marginLeft: '10px', paddingRight: '120px', width: '100%' }}>
              <Avatar size="100px" name="Kuba" round={true} src= {user.avatarURL}/>
            </Col>
            <Col xs="5" style={{ borderLeft: 'thin solid #d9d9d9' }}>
              <CardTitle><b>{user.name}</b></CardTitle>
              <CardText>ANSWERED: {Object.keys(user.answers).length}</CardText>
              <CardText>CREATED: {user.questions.length}</CardText>
            </Col>
            <Col xs="2" >
                <br/>
                <h1 style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  fontSize: '35px',
                  color: 'black',
                  lineHeight: '70px',
                  textAlign: 'center',
                  background: '#d9d9d9'
                }}>{Object.keys(user.answers).length + user.questions.length}</h1>
            </Col>
          </Row>
        </Card>
      </div>
    )
  }
}

export default User
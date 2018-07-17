import React, { Component } from 'react'
import { Card, CardTitle, Col, Row, CardText, Button } from 'reactstrap'
import Avatar from 'react-avatar'

class User extends Component {
  render() {
    return (
      <div>
        <Card body>
          <Row>
            <Col xs="2" style={{ display: 'block', marginLeft: '10px', paddingRight: '120px', width: '100%' }}>
              <Avatar size="100px" name="Kuba" round={true} src="https://78.media.tumblr.com/f1668a64e65680ca53c7f35c60bd8d7d/tumblr_inline_ofbdxfOZKL1s1qdgg_540.jpg" />
            </Col>
            <Col xs="5" style={{ borderLeft: 'thin solid #d9d9d9' }}>
              <CardTitle><b>USER NAME</b></CardTitle>
              <CardText>ANSWERED: 10</CardText>
              <CardText>CREATED: 18</CardText>
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
                }}>15</h1>
            </Col>
          </Row>
        </Card>
      </div>
    )
  }
}

export default User
import React, { Component } from 'react'
import {
  Card, CardText, CardTitle, Button, Row, Col, Progress
} from 'reactstrap'
import Avatar from 'react-avatar'

class Results extends Component {
  render() {
    return (
      <div>
        <Card body>
          <CardTitle>Asked by User</CardTitle>
          <hr />
          <Row>
            <Col xs="2" style={{ display: 'block', marginLeft: '10px', paddingRight: '120px', width: '100%' }}>
              <Avatar size="100px" name="Kuba" round={true} src="https://78.media.tumblr.com/f1668a64e65680ca53c7f35c60bd8d7d/tumblr_inline_ofbdxfOZKL1s1qdgg_540.jpg" />
            </Col>
            <Col xs="9" style={{ borderLeft: 'thin solid #d9d9d9' }}>
              <CardText><h3>Results:</h3></CardText>
              <div style={{ border: 'thin solid #d9d9d9', borderRadius:'35px', padding:'20px' }}>
              <p>Option 1 Option 1 Option 1 Option 1 Option 1</p>
              <div className="text-center">50%</div>
              <Progress value={50} color="info" />
              </div>
              <br />
              <div style={{ border: 'thin solid #d9d9d9', borderRadius:'35px', padding:'20px' }}>
              <p>Option 2 Option 2 Option 2 Option 2 Option 2</p>
              <div className="text-center">30%</div>
              <Progress value={30} color="info" />
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

export default Results
import React, { Component } from 'react'
import {
  Card, CardText, CardTitle, Button, Row, Col
} from 'reactstrap'
import Avatar from 'react-avatar'

class QuestionPreview extends Component {
  render() {
    return (
      <div>
        <Card body>
          <CardTitle>User asks</CardTitle>
          <hr />
          <Row>
            <Col xs="2" style={{display: 'block', marginLeft: '10px', paddingRight: '120px', width: '100%'}}>
            <Avatar size="100px" name="Kuba" round={true} src="https://78.media.tumblr.com/f1668a64e65680ca53c7f35c60bd8d7d/tumblr_inline_ofbdxfOZKL1s1qdgg_540.jpg" />
            </Col>
            <Col xs="5" style={{borderLeft:'thin solid #d9d9d9'}}>
              <CardText><h3>Would you rather:</h3></CardText>
              <Row>
                <Col sm="6" style={{overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis', width:'100px'}}>
                Option 1 Option 1 Option 1
                </Col>
                <Col sm="6" style={{overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis', width:'100px'}}>
                Option 2 Option 2 Option 2 
                </Col>
              </Row>
              <hr />
              <Button style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '90%'}}>VIEW</Button>
            </Col>
          </Row>
        </Card>
      </div>
    )
  }
}

export default QuestionPreview
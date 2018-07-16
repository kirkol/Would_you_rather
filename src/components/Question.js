import React, { Component } from 'react'
import {
  Form, FormGroup, Label, Input, Button, Card, Row, Col, CardText, CardTitle
} from 'reactstrap'
import Avatar from 'react-avatar'

class Question extends Component {
  render() {
    return (
      <div>
        <Card body>
          <CardTitle>User asks</CardTitle>
          <hr />
          <Row>
            <Col xs="2" style={{ display: 'block', marginLeft: '10px', paddingRight: '120px', width: '100%' }}>
              <Avatar size="100px" name="Kuba" round={true} src="https://78.media.tumblr.com/f1668a64e65680ca53c7f35c60bd8d7d/tumblr_inline_ofbdxfOZKL1s1qdgg_540.jpg" />
            </Col>
            <Col xs="8" style={{ borderLeft: 'thin solid #d9d9d9', paddingLeft: '30px' }}>
              <CardText><h3>Would you rather:</h3></CardText>
              <Row>
                <Form>
                  <FormGroup tag="fieldset">
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Option one is this and that—be sure to include why it's great
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Option two can be something else and selecting it will deselect option one
                      </Label>
                    </FormGroup>
                  </FormGroup>
                  <hr />
                  <Button style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '90%' }}>Submit</Button>
                </Form>
              </Row>
            </Col>
          </Row>
        </Card>
      </div>
    )
  }
}

export default Question
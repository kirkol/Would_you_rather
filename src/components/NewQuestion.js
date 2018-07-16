import React, { Component } from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

class NewQuestion extends Component {
  render() {
    return (
      <Form style={{marginTop:'20px'}}>
        <h2>Create new question</h2>
        <hr />
        <FormGroup>
          <h4>Would you rather</h4>
          <Input type="textarea" name="text" id="exampleText" placeholder="Option1..."/>
        </FormGroup>
        <p style={{textAlign: 'center'}}>--- OR ---</p>
        <FormGroup>
          <Input type="textarea" name="text" id="exampleText" placeholder="Option2..."/>
        </FormGroup>
        <Button style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '40%'}}>ADD NEW QUESTION</Button>
      </Form>
    )
  }
}

export default NewQuestion
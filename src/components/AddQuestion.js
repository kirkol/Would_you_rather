import React, { Component } from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions';
import { toggleTab } from '../actions/tab';

class AddQuestion extends Component {

  handleClick = (e, opt1, opt2) => {
    e.preventDefault
    let question = {
      author: this.props.authedUser,
      optionOneText: opt1,
      optionTwoText: opt2
    }
    if (opt1 == false || opt2 == false) {
      alert("both options need to be filled :)")
    } else {
      this.props.dispatch(handleAddQuestion(question))
      this.props.dispatch(toggleTab("unanswered"))
      this.props.history.push("/")
    }
  }

  render() {

    let opt1 = ""
    let opt2 = ""

    return (
      <Form style={{ marginTop: '20px' }}>
        <h2>Create new question</h2>
        <hr />
        <FormGroup>
          <h4>Would you rather</h4>
          <Input
            onChange={(e) => opt1 = e.target.value}
            type="textarea"
            name="text"
            id="exampleText"
            placeholder="Option1..." />
        </FormGroup>
        <p style={{ textAlign: 'center' }}>--- OR ---</p>
        <FormGroup>
          <Input
            onChange={(e) => opt2 = e.target.value}
            type="textarea"
            name="text"
            id="exampleText"
            placeholder="Option2..." />
        </FormGroup>
        <Button
          onClick={(e) => this.handleClick(e, opt1, opt2)}
          style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '40%' }}>
          ADD NEW QUESTION
        </Button>
      </Form>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(AddQuestion)
import React, { Component } from 'react'
import QuestionsAnswered from './QuestionsAnswered';
import QuestionsNotAnswered from './QuestionsNotAnswered';
import QuestionPreview from './QuestionPreview';
import {
  Row, Col
} from 'reactstrap'

class Home extends Component {
  render() {
    return (
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" href="#" style={{ textDecoration: 'none', color: '#595959' }}>Unanswered questions</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{ textDecoration: 'none', color: '#595959' }}>Answered questions</a>
            </li>
          </ul>
          <QuestionPreview />
        </Col>
      </Row>
    )
  }
}

export default Home
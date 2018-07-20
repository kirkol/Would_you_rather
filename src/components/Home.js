import React, { Component } from 'react'
import QuestionsUnanswered from './QuestionsUnanswered';
import QuestionsAnswered from './QuestionsAnswered';

class Home extends Component {

  state = {
    tab: "unanswered"
  }

  handleClick = (tabName) => {
    this.setState(() => ({
      tab: tabName
    }))
  }

  render() {
    return (
      this.state.tab === "unanswered" ? 
      (<div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <p onClick={(e) => this.handleClick("unanswered")} className="nav-link active" style={{ scolor: '#595959' }}>Unanswered questions</p>
          </li>
          <li className="nav-item">
            <p onClick={(e) => this.handleClick("answered")} className="nav-link" style={{ color: '#595959' }}>Answered questions</p>
          </li>
        </ul>
       <QuestionsUnanswered/>
      </div>)
      :
      (<div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <p onClick={(e) => this.handleClick("unanswered")} className="nav-link" style={{ scolor: '#595959' }}>Unanswered questions</p>
          </li>
          <li className="nav-item">
            <p onClick={(e) => this.handleClick("answered")} className="nav-link active" style={{ color: '#595959' }}>Answered questions</p>
          </li>
        </ul>
        <QuestionsAnswered/>
      </div>)
    )
  }
}

export default Home
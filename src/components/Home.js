import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to="/questions-unanswered" className="nav-link active" style={{ textDecoration: 'none', color: '#595959' }}>Unanswered questions</Link>
          </li>
          <li className="nav-item">
            <Link to="/questions-answered" className="nav-link" style={{ textDecoration: 'none', color: '#595959' }}>Answered questions</Link>
          </li>
        </ul>
        HOME, SWEET HOME
      </div>
    )
  }
}

export default Home
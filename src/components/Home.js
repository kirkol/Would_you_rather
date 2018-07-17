import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="/" style={{ textDecoration: 'none', color: '#595959' }}>Unanswered questions</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/" style={{ textDecoration: 'none', color: '#595959' }}>Answered questions</a>
          </li>
        </ul>
        HOME, SWEET HOME
      </div>
    )
  }
}

export default Home
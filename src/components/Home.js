import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="#" style={{ textDecoration: 'none', color: '#595959' }}>Unanswered questions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{ textDecoration: 'none', color: '#595959' }}>Answered questions</a>
          </li>
        </ul>
        HOME!!!
      </div>
    )
  }
}

export default Home
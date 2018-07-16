import React, { Component } from 'react'
import User from './User'

class UsersBoard extends Component {
  render() {
    return (
      <div style={{marginTop:'15px'}}>
      <User />
      <User />
      <User />
      <User />
      <User />
      </div>
    )
  }
}

export default UsersBoard
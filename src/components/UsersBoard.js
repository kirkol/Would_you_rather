import React, { Component } from 'react'
import User from './User'
import { connect } from 'react-redux'

class UsersBoard extends Component {
  render() {
    const {users} = this.props
    const usersIdRank = Object.keys(users)
                      .sort((a, b) => 
                      (Object.keys(users[b].answers).length + users[b].questions.length) 
                      - 
                      (Object.keys(users[a].answers).length + users[a].questions.length))
    console.log("RANK", usersIdRank)
    return (
      <div style={{marginTop:'15px'}}>
      {usersIdRank.map((id) => (
        <User user={users[id]} key={id}/>
      ))}
      </div>
    )
  }
}

function mapStateToProps({users}){
  return {
    users
  }
}

export default connect(mapStateToProps)(UsersBoard)
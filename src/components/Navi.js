import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom'

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import { setAuthedUser } from '../actions/authedUser'

class Navi extends Component {

  handleLogout(e) {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(setAuthedUser(null))
    this.props.history.push("/")
  }

  render() {
    const {users, userId} = this.props
    return (
      <div className="fixed-top navbar-dark bg-dark">

        {this.props.userId ?
          (<Navbar color="dark" light expand="sm">
            <div>
              <NavbarBrand tag={Link} to={"/"}>Home</NavbarBrand>
              <NavbarBrand tag={Link} to={"/new"}>New Question</NavbarBrand>
              <NavbarBrand tag={Link} to={"/userboard"}>Users Board</NavbarBrand>
            </div>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Avatar name="Kuba" size="40" round={true} src={users[userId].avatarURL}/>
              </NavItem>
              <NavItem>
                <NavLink disabled>Hello {users[userId].name}</NavLink>
              </NavItem>
              <NavItem>
                <Button onClick={(e) => { this.handleLogout(e) }}>Logout</Button>
              </NavItem>
            </Nav>
          </Navbar>)
          :
          (<Navbar color="dark" light expand="sm">
            <NavbarBrand tag={Link} to={"/"}>Home</NavbarBrand>
            <NavbarBrand tag={Link} to={"/userboard"}>Users Board</NavbarBrand>
          </Navbar>)
        }
      </div>
    )
  }
}

// mapStateToProps dostaje kawałek głownego store'a - tym kawałkiem jest authedUser
// wrzuca je do komponentu Navi jako props o nazwie userOnline
// jesli wystapi akcja, ktora zmieni authedUser w glownym Storze, to kopniety w dupsko zostanie tez
// komponent Navi - nastapi jego przerenderowanie (jak po setState)

function mapStateToProps({ authedUser, users }) {
  return {
    users,
    userId: authedUser
  }
}

export default withRouter(connect(mapStateToProps)(Navi))
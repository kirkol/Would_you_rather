import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from 'react-avatar'
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
  }

  render() {
    return (
      <div className="fixed-top navbar-dark bg-dark">

        {this.props.userOnline ?
          (<Navbar color="dark" light expand="sm">
            <div>
              <NavbarBrand href="/">Home</NavbarBrand>
              <NavbarBrand href="/new">New Question</NavbarBrand>
              <NavbarBrand href="/userboard">Users Board</NavbarBrand>
            </div>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Avatar name="Kuba" size="40" round={true} src="https://78.media.tumblr.com/f1668a64e65680ca53c7f35c60bd8d7d/tumblr_inline_ofbdxfOZKL1s1qdgg_540.jpg" />
              </NavItem>
              <NavItem>
                <NavLink disabled>Hello {this.props.userOnline}</NavLink>
              </NavItem>
              <NavItem>
                <Button onClick={(e) => { this.handleLogout(e) }}>Logout</Button>
              </NavItem>
            </Nav>
          </Navbar>)
          :
          (<Navbar color="dark" light expand="sm">
            <NavbarBrand href="/userboard">Users Board</NavbarBrand>
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

function mapStateToProps({ authedUser }) {
  return {
    userOnline: authedUser
  }
}

export default connect(mapStateToProps)(Navi)
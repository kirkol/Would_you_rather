import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Container, Col, Row, Input, FormGroup, Form, Button
} from 'reactstrap';
import { setAuthedUser } from '../actions/authedUser'

let opt = ""

class SignIn extends Component {

  handleSignIn = (e) => {
    e.preventDefault();
    const { dispatch } = this.props
    if (opt) {
      dispatch(setAuthedUser(opt))
      this.props.history.push("/")
    }else{
      alert("First, you need to choose your user :)")
    }
  }

  render() {
    const { usersList } = this.props
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 4, offset: 4 }}>
            <div className="text-center">
              <Form className="form-signin">
                <FormGroup>
                  <img className="mb-4 rounded-circle" src="https://78.media.tumblr.com/f1668a64e65680ca53c7f35c60bd8d7d/tumblr_inline_ofbdxfOZKL1s1qdgg_540.jpg" alt="" width="150" height="150" style={{marginTop: '30px'}} />
                  <br /><br />
                  <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                  <Input type="select" name="select" id="exampleSelect" defaultValue="" onChange={(event) => { opt = event.target.value }}>
                    <option disabled value=""> -- choose your user -- </option>
                    {Object.keys(usersList).map((u) => (
                      <option key={u} value={usersList[u].id}>
                        {usersList[u].name}
                      </option>
                    ))
                    }
                  </Input>
                  <br />
                  <Button className="btn btn-lg btn-primary btn-block" onClick={(e) => this.handleSignIn(e)}>Submit</Button>
                  <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
                </FormGroup>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

// tu okreslam jakie rzeczy z glownego store'a mnie interesuja w kontekscie tego komponentu
// zmieniam je na propsy tego komponentu (moge zmienic im nazwe, np. jak tu: z users na usersList)
function mapStateToProps({ users, authedUser }) {
  return {
    authedUser,
    usersList: users
  }
}

// daje dostep komponentowi SignIn do glownego store'a
export default connect(mapStateToProps)(SignIn) 
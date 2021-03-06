import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'
import NumSystemTable from './NumSystemTable'
import CreateUser from './CreateUser'
import SignIn from './SignIn'
import * as data from './utils/data'
import * as firebaseAPI from './utils/firebaseAPI'
import * as personSVG from './icons/person-add.svg'
import { Grid, Row, Col, Table, Button } from 'react-bootstrap'



class App extends Component {

    state = {
      users: []
    }

    createUser(user) {
      firebaseAPI.createUser(user)
    }

    signIn(user) {
      firebaseAPI.signIn(user)
    }

    handleClick() {
      console.log('sign out')
      firebaseAPI.signOut()
    }

    render() {
        return (
          <Grid>
          <Route exact path='/' render={() => (
            <div>
            <Row className="App">

              <Col className="App-title" xs={12}>
                <h1> Number System</h1>
              </Col>
              <Col xs={12} md={4}>
              <Table bordered condensed hover>
                <tbody>
                  <tr>
                    <td>Number</td>
                    <td>0</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>Mnemonic</td>
                    <td>O</td>
                    <td>A</td>
                    <td>B</td>
                    <td>C</td>
                    <td>D</td>
                    <td>E</td>
                    <td>S</td>
                    <td>G</td>
                    <td>H</td>
                    <td>N</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col xs={12} md={4}>
              <h3>PERSON - ACTION - OBJECT</h3>
            </Col>
            <Col xs={12} md={4}>
              <Row>
                <Col xs={12} md={3}>
                  <Button
                    type="button"
                    active
                    bsStyle="primary"
                    onClick={this.handleClick}
                  >
                    <h5>Sign Out</h5>
                  </Button>
                </Col>
                <Col xs={12} md={3}>
                  <Link to='/signin'>
                    <Button type="button" active><h5>Sign In</h5></Button>
                  </Link>
                </Col>
                <Col xs={12} md={3}>

                  <Link to='/create-user'>
                    <Button type="button" active><img src={personSVG} width="28px" alt="plus sign with person" />Create an Account</Button>
                  </Link>

                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <NumSystemTable numberSystem={data.numberSystem} />
            </Col>
          </Row>
          </div>


          )}/>
          <Route path='/create-user' render={({ history }) => (
            <Row>
            <CreateUser
              onCreateUser={(user) => {
                this.createUser(user)
                history.push('/')
              }}
            />
            </Row>
          )}/>

          <Route path='/signIn' render={({ history }) => (
            <Row>
              <SignIn
                onSignIn={(user) => {
                  this.signIn(user)
                  history.push('/')
                }}
              />
            </Row>

          )}/>


         </Grid>
        );
    }
}

export default App;
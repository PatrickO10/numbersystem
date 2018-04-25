import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Row, Col, Table } from 'react-bootstrap';

class App extends Component {
    render() {
        return (
          <div className="App">
          <Grid>
            <Row className="App-header">
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
          </Row>
         </Grid>
        </div>
        );
    }
}

export default App;
import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './App.css';
import Main from '../Routes/Main';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Row type="flex" justify="center">
          <Col span={24}>
            {/*this.props.children*/}
            <Main />
          </Col>
        </Row>
      </div>
    );
  }
}
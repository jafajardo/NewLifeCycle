import React, { Component } from 'react';
import { Row, Col } from 'antd';

export default class Services extends Component {
  render() {
    return(
      <div>
        <Row>
          <Col span={8}>
            <h2>Services</h2>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <p>Full service with complete strip of parts and rebuild</p>
            <p>$150</p>
          </Col>
          <Col span={8}>
            <p>Full service without strip</p>
            <p>$70</p>
          </Col>
          <Col span={8}>
            <p>Drivetrain tuning</p>
            <p>$40</p>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <p>Brake cable replacement</p>
            <p>$15</p>
          </Col>
          <Col span={8}>
            <p>Drivetrain gear cable replacement</p>
            <p>$15</p>
          </Col>
          <Col span={8}>
            <p>Buttom bracket and regreasing</p>
            <p>$15</p>
          </Col>
        </Row>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';

export default class Heading extends Component {
  render() {
    return(
      <Row>
        <Col span={12} />
        <Col span={3}>
          About
        </Col>
        <Col span={3}>
          Services
        </Col>
        <Col span={3}>
          Contact
        </Col>
        <Col span={3}>
          <Button type="danger">
            Book Now
          </Button>
        </Col>
      </Row>
    );
  }
}

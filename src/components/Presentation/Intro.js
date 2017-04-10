import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';

export default class Intro extends Component {
  render() {
    return(
      <div>

        <Row>
          <Col span={6}>
            <h1><span>New</span> Life Cycles</h1>
          </Col>
        </Row>

        <Row>
          <Col span={6}>
            <p>
              We deliver quality repair and restoration services at a franction of a cost.
            </p>
          </Col>
        </Row>

        <Row>
          <Col span={6}>
            <Button type="danger" ghost>
              Learn More
            </Button>
          </Col>
        </Row>

      </div>
    );
  }
}

import React, { Component } from 'react';
import { Row, Col } from 'antd';

export default class About extends Component {
  render() {
    return(
      <div>

        <Row>
          <Col span={12}>
            <h2>A Few Words About Us</h2>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <p>
              We are bike enthusiasts who are passionate about all things related to bicycles. Our in house
              machanics have years of experience in reparing and maintaining bikes.
            </p>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <p>
              We cater to all types of bikes - BMX, MTR, ROAD bikes, vintage, etc. You name it, we can fix it for you.
            </p>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <p>
              So if you are located in the Western Suburbs of Melbourne, head on over to our shop and give your bicycle
              the new life that it needs.
            </p>
          </Col>
        </Row>

      </div>
    );
  }
}

import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Intro from '../Presentation/Intro';
import About from '../Presentation/About';
import Services from '../Presentation/Services';
import Heading from '../Presentation/Heading';

export default class Main extends Component {
  render() {
    return(
      <div>
       <Row>
        <Col span={24}>
          <div>

            <Heading />

            <Intro />

            <About />

            <Services />

          </div>
        </Col>
       </Row>
      </div>
    );
  }
}

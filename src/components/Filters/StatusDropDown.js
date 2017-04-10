import React, { Component } from 'react';
import axios from 'axios';
import { Select } from 'antd';
import { apiConfig } from '../../configs';

const { Option } = Select;

class StatusDropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: []
    };
  }

  componentDidMount() {
    const { coreplusWebClientURL, headers } = apiConfig;
    const requestUrl = `${coreplusWebClientURL}api/Client/ClientStatus`;

    axios.get(requestUrl, { headers })
      .then(({data}) => {
        this.setState({ options: data });
      });
  }

  renderOptions() {
    return this.state.options.map((option) => {
      return (
        <Option
          key={option.value + option.text}
          value={option.value.toString()}
        >
          {option.text}
        </Option>
      );
    });
  }

  render() {
    return (
      <div>
        <label>Status: </label>
        <Select
          style={{ width: 200 }}
           filterOption={(inputValue, option) => {
             return option.props.children.indexOf(inputValue) > -1;
           }}
           onChange={(values) => {this.props.onChange('status', values)}}
         >
           { this.renderOptions() }
         </Select>
      </div>
    );
  }
}

export { StatusDropDown };

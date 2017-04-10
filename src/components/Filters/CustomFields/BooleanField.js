import React from 'react';
import { Select } from 'antd';

const { Option } = Select;
const BooleanField = ({ id, label, value, onChange }) => {
  return (
    <div>
      <label>{label}: </label>
      <Select
        style={{ width: 200 }}
        value={value}
        onChange={(value) => { onChange(id, value)}}
      >
        <Option value=''>All</Option>
        <Option value='true'>Yes</Option>
        <Option value='false'>No</Option>
      </Select>
    </div>
  );
};

export default BooleanField;

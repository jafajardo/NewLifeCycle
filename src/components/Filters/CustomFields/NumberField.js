import React from 'react';
import { InputNumber } from 'antd';

const NumberField = ({ id, label, value, onChange }) => {
  return (
    <div>
      <label>{label}: </label>
      <InputNumber
        style={{ width: 200 }}
        value={value}
        onChange={(e) => { onChange(id, e.target.value)}}
        onKeyUp={(e) => {
          if(e.keyCode === 8)
            onChange(id, e.target.value);
        }}
      />
    </div>
  );
};

export default NumberField;

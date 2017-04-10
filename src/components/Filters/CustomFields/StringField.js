import React from 'react';
import { Input } from 'antd';

const StringField = ({ id, label, value, onChange }) => {
  return (
    <div>
      <label>{label}: </label>
      <Input
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

export default StringField;

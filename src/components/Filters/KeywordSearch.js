import React from 'react';
import { Input } from 'antd';

const { Search } = Input;
const KeywordSearch = ({value, onChange}) => {
  return (
    <div>
      <label>Keyword: </label>
      <Search
        style={{ width: 200 }}
        placeholder="input keyword to search"
        value={value}
        onChange={(e) => { onChange('keyword', e.target.value) }}
      />
    </div>
  );
}

export { KeywordSearch };

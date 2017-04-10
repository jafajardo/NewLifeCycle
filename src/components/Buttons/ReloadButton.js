import React from 'react';
import { Button } from 'antd';

const ReloadButton = ({ loading, onClick }) => {
  return (
    <Button
      type='primary'
      icon="sync"
      loading={loading}
      onClick={onClick}
    >
      Reload
    </Button>
  );
}

export { ReloadButton };

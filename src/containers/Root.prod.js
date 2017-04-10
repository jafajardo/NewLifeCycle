import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import Routes from '../routes';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <LocaleProvider locale={enUS}>
            <Routes history={browserHistory} />
          </LocaleProvider>
        </div>
      </Provider>
    );
  }
}

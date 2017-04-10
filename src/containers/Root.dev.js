import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
//import { browserHistory } from 'react-router';
import enUS from 'antd/lib/locale-provider/en_US';
import DevTools from './DevTools';
//import Routes from '../routes';
import App from '../components/App/App';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <LocaleProvider locale={enUS}>
            {/*<Routes history={browserHistory} />*/}
            <App />
          </LocaleProvider>
          <DevTools />
        </div>
      </Provider>
    );
  }
}

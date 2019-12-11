import React, {Component} from 'react';
import Config from 'react-native-config';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';

import CodePush from 'react-native-code-push';
import OneSignal from 'react-native-onesignal';

import '~/config/ReactotronConfig';

import {store, persistor} from './store';

import App from './App';

class Index extends Component {
  constructor(props) {
    super(props);
    OneSignal.init(Config.RN_ONE_SIGNAL);

    this.onReceived = this.onReceived.bind(this);
    this.onOpened = this.onOpened.bind(this);
    this.onIds = this.onIds.bind(this);

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived = data => {
    //Recebe as informações do push
  };
  onOpened = notification => {
    //Recebe a ação clicada na notificação
  };
  onIds = id => {
    // email -> id
    //Obs. O user pode ter mais de 1 id, isso permite
    //ele se conectar em varios celulares
  };

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar />
          <App />
        </PersistGate>
      </Provider>
    );
  }
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(Index);

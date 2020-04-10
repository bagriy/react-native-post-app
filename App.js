import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { AppNavigation } from './src/navigation/AppNavigation';
import { Provider} from 'react-redux';

import { bootstrap } from './src/helpers/bootstrap';
import store from './src/store';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={err => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

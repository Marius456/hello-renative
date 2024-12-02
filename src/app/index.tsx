import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import Counter from './Counter';
import { View } from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
        <View style={{ backgroundColor: "red", height: "500px", width: "500px" }}>
          <Counter />
        </View>
    </Provider>
  );
};

export default App;

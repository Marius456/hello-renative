import React from "react";
import { Text, View } from "react-native";
import { ThemeProvider } from "../config";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from 'react-redux';
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ backgroundColor: "red", height: "500px", width: "500px" }}>
        <Counter />
      </View>
    </Provider>
  );
};

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default App;

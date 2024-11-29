import React from "react";
import { Text, View } from "react-native";
import { ThemeProvider } from "../config";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../state";

import { Provider as PaperProvider } from "react-native-paper";

const App = () => (
  <ThemeProvider>
    {/* <PaperProvider> */}
    <ReduxProvider store={store}>
      <View style={{ backgroundColor: "red", height: "500px", width: "500px" }}>
        <Text>TEST</Text>
      </View>
    </ReduxProvider>
    {/* </PaperProvider> */}
  </ThemeProvider>
);

export default App;

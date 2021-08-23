import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import React from "react";
import { YellowBox } from "react-native";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "./store/store";
import Navigation from "./router/";
import theme from "./theme/theme";
YellowBox.ignoreWarnings([
  // `Require cycle:`,
  `ImmutableStateInvariantMiddleware took`,
  `SerializableStateInvariantMiddleware`,
]);

export default function App() {
  return (
    <Provider store={store}>
      <ActionSheetProvider>
        <ThemeProvider theme={theme}>
          <Navigation />
        </ThemeProvider>
      </ActionSheetProvider>
    </Provider>
  );
}

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../src/store";
import { AppContainer } from "../src/App.styles";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#282c34" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Router>
          <AppContainer>
            <div style={{ padding: "20px" }}>
              <Story />
            </div>
          </AppContainer>
        </Router>
      </Provider>
    ),
  ],
};

export default preview;

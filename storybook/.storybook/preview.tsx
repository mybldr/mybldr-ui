import type { Preview } from "@storybook/react";
import { MyBLDRThemeProvider } from "mybldr-ui";
import React from "react";
/* snipped for brevity */

export const withMuiTheme = (Story) => (
  <MyBLDRThemeProvider>
    <Story />
  </MyBLDRThemeProvider>
);

export const decorators = [withMuiTheme];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

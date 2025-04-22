import "@fontsource/material-icons";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BldrThemeProvider } from "@mybldr/ui";
import type { Preview } from "@storybook/react";
import React from "react";

export const withMuiTheme = (Story: React.FC) => (
  <BldrThemeProvider>
    <Story />
  </BldrThemeProvider>
);

export const decorators = [withMuiTheme];

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

import "@fontsource/material-icons";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import type { Preview } from "@storybook/react";
import { BldrThemeProvider } from "@mybldr/ui";

import { withThemeFromJSXProvider } from "@storybook/addon-themes";

export const decorators = [
  withThemeFromJSXProvider({
    defaultTheme: "light",
    Provider: BldrThemeProvider,
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
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

import type { Preview } from "@storybook/react-vite";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { BldrThemeProvider } from "../src/BldrThemeProvider";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const decorators = [
  withThemeFromJSXProvider({
    Provider: BldrThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      sort: "requiredFirst",
      exclude: new RegExp(
        [
          // on[Something] handlers
          "on[A-Z].*",
          // aria labels
          "aria-.*",
          // Customization props
          ".*[Cc]omponent",
          ".*Props",
          "slots",
          "sx",
          "ref",
          ".*Ref",
          "classes",
          "style",
          "render[A-Z].*",
          "unstable_.*",
          "id",
        ]
          .map((selector) => `^${selector}$`)
          .join("|"),
      ),
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

import type { Preview } from "@storybook/react-vite";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { theme } from "../src/theme";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

export const decorators = [
  withThemeFromJSXProvider({
    themes: { theme },
    Provider: ThemeProvider,
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
          ".*[Cc]omponents?",
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

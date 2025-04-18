import { createTheme, lighten, THEME_ID, ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";

declare module "@mui/material/styles" {
  interface BorderColor {
    primary: string;
    secondary: string;
  }
  interface Util {
    gridRowHover: string;
  }
  interface Palette {
    border: BorderColor;
    util: Util;
  }
  interface PaletteOptions {
    border: BorderColor;
    util: Util;
  }
  interface TypeBackground {
    secondary: string;
    tertiary: string;
  }
}

declare module "@mui/material/styles/createTypography" {
  interface TypographyOptions {
    fontWeightSemibold?: number;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#1D6BCD",
    },
    secondary: {
      main: "#555A66",
    },
    error: {
      main: "#A50722",
    },
    success: {
      main: "#177802",
    },
    info: {
      main: "#1E7EC3",
    },
    warning: {
      main: "#DC6803",
    },
    text: {
      primary: "#17181A",
      secondary: "#5D6062",
    },
    background: {
      secondary: "#F8F8F8",
      tertiary: "#F1F2F2",
    },
    border: {
      primary: "#878A8D",
      secondary: "#C3C6CC",
    },
    util: {
      gridRowHover: "#E3E4E5",
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemibold: 600,
    fontWeightBold: 700,
    h1: {
      fontSize: "48px",
      lineHeight: "60px",
    },
    h2: {
      fontSize: "36px",
      lineHeight: "44px",
    },
    h3: {
      fontSize: "30px",
      lineHeight: "38px",
    },
    h4: {
      fontSize: "24px",
      lineHeight: "32px",
    },
    h5: {
      fontSize: "20px",
      lineHeight: "30px",
    },
    h6: {
      fontSize: "18px",
      lineHeight: "28px",
    },
    body1: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    body2: {
      fontSize: "14px",
      lineHeight: "20px",
    },
    button: {
      textTransform: "none",
    },
  },
});

export const BldrThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider
      theme={{
        [THEME_ID]: {
          ...theme,
          components: {
            MuiDialogTitle: {
              styleOverrides: {
                root: {
                  fontWeight: 600,
                  fontSize: "20px",
                  paddingBottom: "32px",
                },
              },
            },
            MuiDialogActions: {
              styleOverrides: {
                root: {
                  padding: theme.spacing(1.5),
                },
              },
            },
            MuiButton: {
              variants: [
                {
                  props: { variant: "contained", color: "secondary" },
                  style: {
                    backgroundColor: lighten(theme.palette.secondary.main, 0.9),
                    color: theme.palette.secondary.main,
                    "&:hover": {
                      backgroundColor: lighten(
                        theme.palette.secondary.main,
                        0.8
                      ),
                    },
                  },
                },
              ],
            },
            MuiButtonGroup: {
              styleOverrides: {
                root: {
                  boxShadow: "none",
                },
              },
            },
          },
        },
      }}
    >
      {children}
    </ThemeProvider>
  );
};

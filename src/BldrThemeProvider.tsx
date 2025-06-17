import {
  createTheme,
  lighten,
  THEME_ID,
  ThemeProvider,
  formLabelClasses,
  ButtonProps,
  alpha,
  Theme,
} from "@mui/material";
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
  interface TypeText {
    primary: string;
    secondary: string;
    disabled: string;
    placeholder: string;
  }
}

declare module "@mui/material/styles/createTypography" {
  interface FontStyle {
    fontWeightSemibold?: number;
  }
}

let theme = createTheme({
  typography: {
    fontFamily: '"Inter","Helvetica",sans-serif',
  },
  palette: {
    primary: {
      main: "#1D6BCD",
    },
    secondary: {
      main: "#0B0C0D",
    },
    error: {
      main: "#C8102E",
    },
    success: {
      main: "#198402",
    },
    info: {
      main: "#1E7EC3",
    },
    warning: {
      main: "#B54708",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#0B0C0D",
      secondary: "#3E4041",
      placeholder: "#636769",
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
});

theme = createTheme(theme, {
  typography: {
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
      color: theme.palette.text.secondary,
    },
    button: {
      textTransform: "none",
    },
  },
});

const getColorFromPalette = (theme: Theme, color: ButtonProps["color"]) =>
  // Ignore 'inherit' prop value and treat it as primary instead
  theme.palette[!color || color === "inherit" ? "primary" : color];

export const BldrThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider
      theme={{
        [THEME_ID]: {
          ...theme,
          components: {
            MuiIconButton: {
              defaultProps: {
                color: "secondary",
              },
              variants: [
                {
                  props: { size: "medium" },
                  style: {
                    fontSize: "1.25rem",
                  },
                },
              ],
            },
            MuiOutlinedInput: {
              styleOverrides: {
                input: {
                  "&::placeholder": {
                    color: theme.palette.text.placeholder,
                    opacity: 1,
                  },
                },
              },
            },
            // Adjust helper text positioning for TextField
            MuiFormHelperText: {
              styleOverrides: {
                root: {
                  marginLeft: "0px",
                },
              },
            },
            // Override translate and scale transform with custom translate
            MuiInputLabel: {
              styleOverrides: {
                root: {
                  transform: "translate(0, -100%) translate(0, -4px)",
                  fontWeight: theme.typography.fontWeightMedium,
                  lineHeight: theme.typography.body1.lineHeight,
                },
              },
            },
            // Prevent label from changing color based on state
            MuiFormLabel: {
              styleOverrides: {
                root: {
                  [`&.${formLabelClasses.error}, &.${formLabelClasses.focused}`]:
                    {
                      color: theme.palette.text.secondary,
                    },
                },
              },
            },
            MuiDialogTitle: {
              defaultProps: {
                component: "h6",
              },
              styleOverrides: {
                root: {
                  paddingRight: "64px",
                  fontWeight: theme.typography.fontWeightSemibold,
                },
              },
            },
            MuiDialogActions: {
              styleOverrides: {
                root: {
                  padding: "12px",
                },
              },
            },
            MuiDialogContent: {
              styleOverrides: {
                root: {
                  padding: "24px",
                },
              },
            },
            MuiButton: {
              defaultProps: {
                disableRipple: true,
              },
              styleOverrides: {
                root: ({ ownerState }: { ownerState: ButtonProps }) => ({
                  transition: theme.transitions.create([
                    "box-shadow",
                    "background-color",
                  ]),
                  borderColor: alpha(
                    getColorFromPalette(theme, ownerState.color).main,
                    0.5,
                  ),
                  fontWeight: theme.typography.fontWeightSemibold,
                  lineHeight: "16px",
                  boxShadow: "none",
                  "&:hover": {
                    boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
                    borderColor: alpha(
                      getColorFromPalette(theme, ownerState.color).main,
                      0.5,
                    ),
                  },
                  "&:focus": {
                    boxShadow: `${alpha(getColorFromPalette(theme, ownerState.color).main, 0.25)} 0 0 0 0.2rem`,
                  },
                }),
              },
              variants: [
                // The "warning" color deviates from MUI patterns
                {
                  props: { variant: "outlined", color: "warning" },
                  style: {
                    color: "#93370D",
                    borderColor: "#FEC84B",
                    "&:hover": {
                      backgroundColor: "#FFF2CC",
                    },
                  },
                },
                {
                  props: { variant: "text", color: "warning" },
                  style: {
                    color: "#93370D",
                    "&:hover": {
                      backgroundColor: "#FFF2CC",
                    },
                  },
                },
                {
                  props: { size: "large" },
                  style: {
                    fontSize: "16px",
                    padding: "8px 16px",
                    lineHeight: "24px",
                  },
                },
                {
                  props: { size: "medium" },
                  style: {
                    fontSize: "14px",
                    padding: "8px 12px",
                  },
                },
                {
                  props: { size: "small" },
                  style: {
                    fontSize: "12px",
                    padding: "6px 8px",
                  },
                },
              ],
            },
          },
        },
      }}
    >
      {children}
    </ThemeProvider>
  );
};

import { CheckCircleOutline } from "@mui/icons-material";
import {
  createTheme,
  THEME_ID,
  ThemeProvider,
  formLabelClasses,
  ButtonProps,
  alpha,
  Theme,
  buttonClasses,
  SimplePaletteColorOptions,
  alertClasses,
} from "@mui/material";
import { PropsWithChildren } from "react";
import colors from "./colors.json";

declare module "@mui/material/styles" {
  interface BorderColor {
    primary: string;
    secondary: string;
    tertiary: string;
    disabled: string;
    brand: {
      primary: string;
      secondary: string;
      tertiary: string;
      solid: string;
    };
    neutral: {
      primary: string;
      secondary: string;
      tertiary: string;
      solid: string;
    };
    error: {
      primary: string;
      secondary: string;
      tertiary: string;
      solid: string;
    };
    warning: {
      primary: string;
      secondary: string;
      tertiary: string;
      solid: string;
    };
    success: {
      primary: string;
      secondary: string;
      tertiary: string;
      solid: string;
    };
    info: {
      primary: string;
      secondary: string;
      tertiary: string;
      solid: string;
    };
  }
  interface Util {
    gridRowHover: string;
  }
  // TODO: update border types
  interface Foreground {
    primary: string;
    secondary: string;
    tertiary: string;
    quarterary: string;
    white: string;
    disabled: string;
    placeholder: string;
    brand: {
      primary: string;
      secondary: string;
    };
    error: {
      primary: string;
      secondary: string;
    };
    warning: {
      primary: string;
      secondary: string;
    };
    success: {
      primary: string;
      secondary: string;
    };
    info: {
      primary: string;
      secondary: string;
    };
  }
  interface TypeBackground {
    primary: string;
    secondary: string;
    tertiary: string;
    disabled: string;
    overlay: string;
    brand: {
      primary: string;
      solid: string;
    };
    neutral: {
      primary: string;
      solid: string;
    };
    error: {
      primary: string;
      solid: string;
    };
    warning: {
      primary: string;
      solid: string;
    };
    success: {
      primary: string;
      solid: string;
    };
    info: {
      primary: string;
      solid: string;
    };
  }
  interface TypeText {
    placeholder: string;
    white: string;
    brand: {
      primary: string;
      primaryHover: string;
    };
    neutral: {
      primary: string;
      primaryHover: string;
    };
    info: {
      primary: string;
      primaryHover: string;
    };
    success: {
      primary: string;
      primaryHover: string;
    };
    warning: {
      primary: string;
      primaryHover: string;
    };
    error: {
      primary: string;
      primaryHover: string;
    };
  }

  interface Palette {
    brand: SimplePaletteColorOptions;
    neutral: SimplePaletteColorOptions;
    border: BorderColor;
    util: Util;
    foreground: Foreground;
  }

  interface PaletteOptions {
    brand: SimplePaletteColorOptions;
    neutral: SimplePaletteColorOptions;
    border: BorderColor;
    util: Util;
    foreground: Foreground;
  }
}

declare module "@mui/material/styles/createTypography" {
  interface FontStyle {
    fontWeightSemibold?: number;
  }
}

declare module "@mui/material/Alert" {
  interface AlertPropsColorOverrides {
    neutral: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    primary: false;
    secondary: false;
    brand: true;
    neutral: true;
  }
  interface ButtonPropsSizeOverrides {
    xsmall: true;
  }
}

let theme = createTheme({
  typography: {
    fontFamily: '"Inter","Helvetica",sans-serif',
  },
  palette: {
    // primary and secondary are not used in the designed system, brand and neutral are used in their place
    // primary and secondary are defined so that if anything defaults to those colors, they remain on brand
    primary: {
      main: colors["blue"]["500"],
      dark: colors["blue"]["600"],
      light: colors["blue"]["25"],
      contrastText: colors["global"]["white"],
    },
    secondary: {
      main: colors["gray"]["900"],
      dark: colors["gray"]["800"],
      light: colors["gray"]["25"],
      contrastText: colors["global"]["white"],
    },

    brand: {
      main: colors["blue"]["500"],
      dark: colors["blue"]["600"],
      light: colors["blue"]["25"],
      contrastText: colors["global"]["white"],
    },
    neutral: {
      main: colors["gray"]["900"],
      dark: colors["gray"]["800"],
      light: colors["gray"]["25"],
      contrastText: colors["global"]["white"],
    },
    error: {
      main: colors["red"]["500"],
      dark: colors["red"]["700"],
      light: colors["red"]["25"],
      contrastText: colors["global"]["white"],
    },
    success: {
      main: colors["green"]["500"],
      dark: colors["green"]["600"],
      light: colors["green"]["25"],
      contrastText: colors["global"]["white"],
    },
    info: {
      main: colors["lightblue"]["700"],
      dark: colors["lightblue"]["800"],
      light: colors["lightblue"]["25"],
      contrastText: colors["global"]["white"],
    },
    warning: {
      main: colors["amber"]["700"],
      dark: colors["amber"]["800"],
      light: colors["amber"]["50"],
      contrastText: colors["global"]["white"],
    },
    text: {
      primary: colors["gray"]["900"],
      secondary: colors["gray"]["600"],
      disabled: colors["gray"]["300"],
      placeholder: colors["gray"]["300"],
      white: colors["global"]["white"],
      brand: {
        primary: colors["blue"]["600"],
        primaryHover: colors["blue"]["700"],
      },
      info: {
        primary: colors["lightblue"]["600"],
        primaryHover: colors["lightblue"]["700"],
      },
      neutral: {
        primary: colors["gray"]["700"],
        primaryHover: colors["gray"]["800"],
      },
      success: {
        primary: colors["green"]["600"],
        primaryHover: colors["green"]["700"],
      },
      warning: {
        primary: colors["amber"]["800"],
        primaryHover: colors["amber"]["900"],
      },
      error: {
        primary: colors["red"]["600"],
        primaryHover: colors["red"]["700"],
      },
    },
    foreground: {
      primary: colors["gray"]["800"],
      secondary: colors["gray"]["600"],
      tertiary: colors["gray"]["300"],
      quarterary: colors["gray"]["200"],
      white: colors["global"]["white"],
      disabled: colors["gray"]["300"],
      placeholder: colors["gray"]["300"],
      brand: {
        primary: colors["blue"]["600"],
        secondary: colors["blue"]["500"],
      },
      error: {
        primary: colors["red"]["600"],
        secondary: colors["red"]["500"],
      },
      warning: {
        primary: colors["amber"]["800"],
        secondary: colors["amber"]["700"],
      },
      success: {
        primary: colors["green"]["600"],
        secondary: colors["green"]["500"],
      },
      info: {
        primary: colors["lightblue"]["700"],
        secondary: colors["lightblue"]["600"],
      },
    },
    background: {
      primary: colors["global"]["white"],
      secondary: colors["gray"]["25"],
      tertiary: colors["gray"]["50"],
      disabled: colors["gray"]["50"],
      overlay: colors["gray"]["800"],
      brand: {
        primary: colors["blue"]["25"],
        solid: colors["blue"]["500"],
      },
      neutral: {
        primary: colors["gray"]["25"],
        solid: colors["gray"]["500"],
      },
      error: {
        primary: colors["red"]["25"],
        solid: colors["red"]["600"],
      },
      warning: {
        primary: colors["amber"]["50"],
        solid: colors["amber"]["700"],
      },
      success: {
        primary: colors["green"]["25"],
        solid: colors["green"]["500"],
      },
      info: {
        primary: colors["lightblue"]["25"],
        solid: colors["lightblue"]["700"],
      },
    },
    border: {
      primary: colors["gray"]["300"],
      secondary: colors["gray"]["200"],
      tertiary: colors["gray"]["100"],
      disabled: colors["gray"]["100"],
      brand: {
        primary: colors["blue"]["300"],
        secondary: colors["blue"]["100"],
        tertiary: colors["blue"]["50"],
        solid: colors["blue"]["600"],
      },
      neutral: {
        primary: colors["gray"]["400"],
        secondary: colors["gray"]["300"],
        tertiary: colors["gray"]["100"],
        solid: colors["gray"]["600"],
      },
      error: {
        primary: colors["red"]["400"],
        secondary: colors["red"]["200"],
        tertiary: colors["red"]["50"],
        solid: colors["red"]["600"],
      },
      warning: {
        primary: colors["amber"]["600"],
        secondary: colors["amber"]["300"],
        tertiary: colors["amber"]["100"],
        solid: colors["amber"]["600"],
      },
      success: {
        primary: colors["green"]["400"],
        secondary: colors["green"]["200"],
        tertiary: colors["green"]["50"],
        solid: colors["green"]["600"],
      },
      info: {
        primary: colors["lightblue"]["400"],
        secondary: colors["lightblue"]["300"],
        tertiary: colors["lightblue"]["50"],
        solid: colors["lightblue"]["600"],
      },
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

export const BldrThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider
      theme={{
        [THEME_ID]: {
          ...theme,
          components: {
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
            MuiAlert: {
              defaultProps: {
                iconMapping: {
                  success: <CheckCircleOutline fontSize="inherit" />,
                },
                variant: "filled",
              },
              styleOverrides: {
                action: {
                  paddingTop: "0px",
                  paddingRight: "4px",
                  alignItems: "center",
                  gap: "4px",
                },
                root: {
                  variants: [
                    ...(
                      [
                        "error",
                        "warning",
                        "info",
                        "success",
                        "neutral",
                      ] as const
                    ).flatMap((color) => [
                      {
                        props: {
                          colorSeverity: color,
                          // The `filled` variant is reserved for the base Alert component
                          variant: "filled",
                        },
                        style: {
                          backgroundColor:
                            theme.palette.background[color].primary,
                          color: theme.palette.text[color].primary,
                          fontWeight: theme.typography.fontWeightRegular,
                          boxShadow:
                            "0px 4px 8px -2px rgba(0, 0, 0, 0.10), 0px 2px 4px -2px rgba(0, 0, 0, 0.06);",
                        },
                      },
                      {
                        props: {
                          colorSeverity: color,
                          // The `standard` variant is reserved for the Banner component
                          variant: "standard",
                        },
                        style: {
                          [`& .${alertClasses.icon}`]: {
                            fontSize: "18px",
                            marginRight: "8px",
                            padding: "9px 0px",
                          },
                          border: `1px solid ${theme.palette.border[color].tertiary}`,
                          padding: "0px 8px",
                          backgroundColor:
                            theme.palette.background[color].primary,
                          color: theme.palette.text[color].primary,
                        },
                      },
                    ]),
                  ],
                },
              },
            },
            MuiButton: {
              defaultProps: {
                disableRipple: true,
                color: "brand",
              },
              styleOverrides: {
                root: ({ ownerState }: { ownerState: ButtonProps }) => ({
                  transition: theme.transitions.create([
                    "box-shadow",
                    "background-color",
                  ]),
                  fontWeight: theme.typography.fontWeightSemibold,
                  lineHeight: "16px",
                  boxShadow: "none",
                  "&:hover": {
                    boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
                  },
                  [`&.${buttonClasses.sizeLarge} .${buttonClasses.icon} > *`]: {
                    fontSize: "18px",
                  },
                  [`&.${buttonClasses.sizeMedium} .${buttonClasses.icon} > *`]:
                    {
                      fontSize: "16px",
                    },
                  [`&.${buttonClasses.sizeSmall} .${buttonClasses.icon} > *`]: {
                    fontSize: "14px",
                  },
                  [`&.MuiButton-sizeXsmall .${buttonClasses.icon} > *`]: {
                    fontSize: "14px",
                  },
                }),
              },
              variants: [
                ...(
                  [
                    "brand",
                    "neutral",
                    "error",
                    "warning",
                    "info",
                    "success",
                  ] as const
                ).map((color) => ({
                  props: { color },
                  style: {
                    "&:focus": {
                      boxShadow: `${alpha(theme.palette[color].main, 0.25)} 0 0 0 0.2rem`,
                    },
                    // Leverage CSS vars used by internal Button component to override button colors
                    // https://github.com/mui/material-ui/blob/95fcfbe9e25d5d93be5ba5e4f771893b2a5c8b50/packages/mui-material/src/Button/Button.js#L171-L196
                    "--variant-textColor": theme.palette.text[color].primary,
                    "--variant-outlinedColor":
                      theme.palette.text[color].primary,
                    "--variant-outlinedBorder":
                      theme.palette.border[color].secondary,
                    "&:hover": {
                      "--variant-outlinedBorder":
                        theme.palette.border[color].secondary,
                      "--variant-outlinedBg": theme.palette[color].light,
                      "--variant-textBg": theme.palette[color].light,
                      "--variant-textColor": theme.palette.text[color].primary,
                      "--variant-outlinedColor":
                        theme.palette.text[color].primary,
                    },
                  },
                })),
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
                    padding: "8px 12px",
                  },
                },
                {
                  props: { size: "xsmall" },
                  style: {
                    fontSize: "12px",
                    padding: "6px 8px",
                  },
                },
                // Outlined variants need 1px less of padding to account for added 1px border
                {
                  props: { size: "large", variant: "outlined" },
                  style: {
                    padding: "7px 15px",
                  },
                },
                {
                  props: { size: "medium", variant: "outlined" },
                  style: {
                    padding: "7px 11px",
                  },
                },
                {
                  props: { size: "small", variant: "outlined" },
                  style: {
                    padding: "7px 11px",
                  },
                },
                {
                  props: { size: "xsmall", variant: "outlined" },
                  style: {
                    padding: "5px 7px",
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

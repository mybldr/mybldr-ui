import { CheckCircleOutline } from "@mui/icons-material";
import {
  createTheme,
  formLabelClasses,
  alpha,
  buttonClasses,
  SimplePaletteColorOptions,
  alertClasses,
  buttonGroupClasses,
  svgIconClasses,
} from "@mui/material";
import type {} from "@mui/material/themeCssVarsAugmentation";
import colors from "./colors.json";
import { isValidElement } from "react";

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
  interface Foreground {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
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
    foreground: Foreground;
  }

  interface PaletteOptions {
    brand: SimplePaletteColorOptions;
    neutral: SimplePaletteColorOptions;
    border: BorderColor;
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

declare module "@mui/material/ButtonGroup" {
  interface ButtonGroupPropsColorOverrides {
    primary: false;
    secondary: false;
    brand: true;
    neutral: true;
  }
  interface ButtonGroupPropsSizeOverrides {
    xsmall: true;
  }
}

let theme = createTheme({
  cssVariables: { cssVarPrefix: "mybldr" },
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
      primary: colors["gray"]["900"],
      secondary: colors["gray"]["700"],
      tertiary: colors["gray"]["600"],
      quaternary: colors["gray"]["500"],
      white: colors["global"]["white"],
      disabled: colors["gray"]["300"],
      placeholder: colors["gray"]["500"],
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
      color: theme.vars.palette.text.secondary,
    },
    button: {
      textTransform: "none",
    },
  },
});

// The custom IconButton is built off of the Button component, so styles are tightly coupled.
// The assumption is the IconButton has an MUI SVG icon component at the root.
// IconButton styles are built into the root Button component overrides so that
// props that are passed through the ButtonGroup component context are applied.
// https://github.com/mui/material-ui/blob/422289f31474a7322aa97d7d291136b77c15b9b1/packages/mui-material/src/Button/Button.js#L506
const ICON_BUTTON_SELECTOR = `:has(> .${svgIconClasses.root})`;
const ICON_BUTTON_CLASS = `&${ICON_BUTTON_SELECTOR}`;

theme = createTheme(theme, {
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            color: theme.vars.palette.text.placeholder,
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
          [`&.${formLabelClasses.error}, &.${formLabelClasses.focused}`]: {
            color: theme.vars.palette.text.secondary,
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
              ["error", "warning", "info", "success", "neutral"] as const
            ).flatMap((color) => [
              {
                props: {
                  colorSeverity: color,
                  // The `filled` variant is reserved for the base Alert component
                  variant: "filled",
                },
                style: {
                  backgroundColor: theme.vars.palette.background[color].primary,
                  color: theme.vars.palette.text[color].primary,
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
                  border: `1px solid ${theme.vars.palette.border[color].tertiary}`,
                  padding: "0px 8px",
                  backgroundColor: theme.vars.palette.background[color].primary,
                  color: theme.vars.palette.text[color].primary,
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
        root: {
          transition: theme.transitions.create([
            "box-shadow",
            "background-color",
          ]),
          fontWeight: theme.typography.fontWeightSemibold,
          lineHeight: "16px",
          boxShadow: "none",
          minWidth: "48px",
          "&:hover": {
            boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
          },
          [`&.${buttonClasses.sizeLarge} .${buttonClasses.icon} > *`]: {
            fontSize: "18px",
          },
          [`&.${buttonClasses.sizeMedium} .${buttonClasses.icon} > *`]: {
            fontSize: "16px",
          },
          [`&.${buttonClasses.sizeSmall} .${buttonClasses.icon} > *`]: {
            fontSize: "14px",
          },
          [`&.MuiButton-sizeXsmall .${buttonClasses.icon} > *`]: {
            fontSize: "14px",
          },
          [`${ICON_BUTTON_CLASS} > .${svgIconClasses.root}`]: {
            fontSize: "inherit",
          },
          [ICON_BUTTON_CLASS]: {
            minWidth: "unset",
          },
        },
      },
      variants: [
        ...(
          ["brand", "neutral", "error", "warning", "info", "success"] as const
        ).map((color) => ({
          props: { color },
          style: {
            "&:focus": {
              boxShadow: `${alpha(theme.palette[color].main, 0.25)} 0 0 0 0.2rem`,
            },
            // Leverage CSS vars used by internal Button component to override button colors
            // https://github.com/mui/material-ui/blob/95fcfbe9e25d5d93be5ba5e4f771893b2a5c8b50/packages/mui-material/src/Button/Button.js#L171-L196
            "--variant-textColor": theme.vars.palette.text[color].primary,
            "--variant-outlinedColor": theme.vars.palette.text[color].primary,
            "--variant-outlinedBorder":
              theme.vars.palette.border[color].secondary,
            "&:hover": {
              "--variant-outlinedBorder":
                theme.vars.palette.border[color].secondary,
              "--variant-outlinedBg": theme.vars.palette[color].light,
              "--variant-textBg": theme.vars.palette[color].light,
              "--variant-textColor": theme.vars.palette.text[color].primary,
              "--variant-outlinedColor": theme.vars.palette.text[color].primary,
            },
          },
        })),
        {
          props: { color: "neutral", variant: "text" },
          style: {
            [ICON_BUTTON_CLASS]: {
              color: theme.vars.palette.foreground.quaternary,
            },
          },
        },
        {
          props: { color: "neutral", variant: "outlined" },
          style: {
            [ICON_BUTTON_CLASS]: {
              color: theme.vars.palette.foreground.quaternary,
            },
          },
        },
        {
          props: { size: "large" },
          style: {
            fontSize: "16px",
            padding: "8px 16px",
            lineHeight: "24px",
            [ICON_BUTTON_CLASS]: {
              padding: "8px",
              fontSize: "24px",
            },
          },
        },
        {
          props: { size: "medium" },
          style: {
            fontSize: "14px",
            padding: "8px 12px",
            lineHeight: "20px",
            [ICON_BUTTON_CLASS]: {
              padding: "8px",
              fontSize: "20px",
            },
          },
        },
        {
          props: { size: "small" },
          style: {
            fontSize: "12px",
            padding: "8px 12px",
            [ICON_BUTTON_CLASS]: {
              padding: "6px",
              fontSize: "20px",
            },
          },
        },
        {
          props: { size: "xsmall" },
          style: {
            fontSize: "12px",
            padding: "6px 8px",
            [ICON_BUTTON_CLASS]: {
              padding: "4px",
              fontSize: "20px",
            },
          },
        },
        // Outlined variants need 1px less of padding to account for added 1px border
        {
          props: { size: "large", variant: "outlined" },
          style: {
            padding: "7px 15px",
            [ICON_BUTTON_CLASS]: {
              padding: "7px",
            },
          },
        },
        {
          props: { size: "medium", variant: "outlined" },
          style: {
            padding: "7px 11px",
            [ICON_BUTTON_CLASS]: {
              padding: "7px",
            },
          },
        },
        {
          props: { size: "small", variant: "outlined" },
          style: {
            padding: "7px 11px",
            [ICON_BUTTON_CLASS]: {
              padding: "5px",
            },
          },
        },
        {
          props: { size: "xsmall", variant: "outlined" },
          style: {
            padding: "5px 7px",
            [ICON_BUTTON_CLASS]: {
              padding: "3px",
            },
          },
        },
      ],
    },
    MuiButtonGroup: {
      defaultProps: {
        disableRipple: true,
        color: "brand",
      },
      styleOverrides: {
        root: {
          boxShadow: "none",
          [`& .${buttonGroupClasses.grouped}`]: {
            minWidth: "unset",
          },
        },
      },
      variants: [
        ...(
          ["brand", "neutral", "error", "warning", "info", "success"] as const
        ).flatMap((color) => [
          {
            props: { color, variant: "contained" },
            style: {
              [`& .${buttonGroupClasses.firstButton}, & .${buttonGroupClasses.middleButton}`]:
                {
                  borderColor: theme.vars.palette.border[color].primary,
                },
            },
          },
          {
            props: { color },
            style: {
              [`& .${buttonGroupClasses.grouped}:focus`]: {
                boxShadow: `${alpha(theme.palette[color].main, 0.25)} 0 0 0 0.2rem`,
              },
            },
          },
        ]),
        // This groups of styles fixes a spacing issues with the outlined variant button group
        // With text and contained variants, a 1px border is inserted in between each button
        // For outlined variants, a -1px margin is applied to prevent borders from overlapping
        // These horizontal discrepancies are correct by modifiying padding on the outlined button
        {
          props: { size: "large", variant: "outlined" },
          style: {
            [`& .${buttonGroupClasses.firstButton}, & .${buttonGroupClasses.middleButton}`]:
              {
                paddingRight: "16px",
              },
            [`& .${buttonGroupClasses.middleButton}, & .${buttonGroupClasses.lastButton}`]:
              {
                paddingLeft: "16px",
              },
            [`& .${buttonGroupClasses.firstButton}${ICON_BUTTON_SELECTOR}, & .${buttonGroupClasses.middleButton}${ICON_BUTTON_SELECTOR}`]:
              {
                paddingRight: "8px",
              },
            [`& .${buttonGroupClasses.middleButton}${ICON_BUTTON_SELECTOR}, & .${buttonGroupClasses.lastButton}${ICON_BUTTON_SELECTOR}`]:
              {
                paddingLeft: "8px",
              },
          },
        },
        {
          props: { size: "medium", variant: "outlined" },
          style: {
            [`& .${buttonGroupClasses.firstButton}, & .${buttonGroupClasses.middleButton}`]:
              {
                paddingRight: "12px",
              },
            [`& .${buttonGroupClasses.middleButton}, & .${buttonGroupClasses.lastButton}`]:
              {
                paddingLeft: "12px",
              },
            [`& .${buttonGroupClasses.firstButton}${ICON_BUTTON_SELECTOR}, & .${buttonGroupClasses.middleButton}${ICON_BUTTON_SELECTOR}`]:
              {
                paddingRight: "8px",
              },
            [`& .${buttonGroupClasses.middleButton}${ICON_BUTTON_SELECTOR}, & .${buttonGroupClasses.lastButton}${ICON_BUTTON_SELECTOR}`]:
              {
                paddingLeft: "8px",
              },
          },
        },
        {
          props: { size: "small", variant: "outlined" },
          style: {
            [`& .${buttonGroupClasses.firstButton}, & .${buttonGroupClasses.middleButton}`]:
              {
                paddingRight: "12px",
              },
            [`& .${buttonGroupClasses.middleButton}, & .${buttonGroupClasses.lastButton}`]:
              {
                paddingLeft: "12px",
              },
            [`& .${buttonGroupClasses.firstButton}${ICON_BUTTON_SELECTOR}, & .${buttonGroupClasses.middleButton}${ICON_BUTTON_SELECTOR}`]:
              {
                paddingRight: "6px",
              },
            [`& .${buttonGroupClasses.middleButton}${ICON_BUTTON_SELECTOR}, & .${buttonGroupClasses.lastButton}${ICON_BUTTON_SELECTOR}`]:
              {
                paddingLeft: "6px",
              },
          },
        },
        {
          props: { size: "xsmall", variant: "outlined" },
          style: {
            [`& .${buttonGroupClasses.firstButton}, & .${buttonGroupClasses.middleButton}`]:
              {
                paddingRight: "8px",
              },
            [`& .${buttonGroupClasses.middleButton}, & .${buttonGroupClasses.lastButton}`]:
              {
                paddingLeft: "8px",
              },
            [`& .${buttonGroupClasses.firstButton}${ICON_BUTTON_SELECTOR}, & .${buttonGroupClasses.middleButton}${ICON_BUTTON_SELECTOR}`]:
              {
                paddingRight: "4px",
              },
            [`& .${buttonGroupClasses.middleButton}${ICON_BUTTON_SELECTOR}, & .${buttonGroupClasses.lastButton}${ICON_BUTTON_SELECTOR}`]:
              {
                paddingLeft: "4px",
              },
          },
        },
      ],
    },
  },
});

export { theme };

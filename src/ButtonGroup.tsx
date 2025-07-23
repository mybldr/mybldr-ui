function getOutlinedPadding(theme: any, size: string) {
  const variants = theme.components?.MuiButton?.variants || [];
  const match = variants.find(
    (v: any) => v.props.variant === "outlined" && v.props.size === size
  );
  return match?.style?.padding;
}

import React, { Children, cloneElement, isValidElement, ReactElement } from "react";
import { useTheme } from "@mui/material";
import { Button, ButtonProps } from "./Button";

export interface ButtonGroupProps extends Omit<ButtonProps, "children"> {
  children: ReactElement<ButtonProps>[] | ReactElement<ButtonProps>;
  className?: string;
  style?: React.CSSProperties;
}

export const ButtonGroup = ({
  children,
  variant = "contained",
  color = "brand",
  size = "medium",
  className = "",
  style = {},
  ...rest
}: ButtonGroupProps) => {
  const theme = useTheme();

  // Get the border color from the theme, fallback to a sensible default if not found
  const borderColor =
  color === "inherit"
    ? theme.palette.divider
    : theme.palette?.border?.[color as keyof typeof theme.palette.border]?.secondary ||
    theme.palette?.border?.brand?.secondary ||
    theme.palette?.divider ||
    "#ccc";

  // Only allow up to 3 buttons
  const childArray = Children.toArray(children)
    .filter(isValidElement)
  const count = childArray.length;

  const groupStyle: React.CSSProperties = {
    display: "inline-flex",
    flexDirection: "row",
    ...style,
  };

  const buttons = childArray.map((child, idx) => {
    // Border radius logic for group effect
    const borderRadiusStyle = {
        borderTopLeftRadius: idx === 0 ? 4 : 0,
        borderBottomLeftRadius: idx === 0 ? 4 : 0,
        borderTopRightRadius: idx === count - 1 ? 4 : 0,
        borderBottomRightRadius: idx === count - 1 ? 4 : 0,
        marginLeft: idx > 0 ? -1 : undefined,
    }

    const paddingStyle: React.CSSProperties = {};
    if (idx === 1) {
        const outlinedPadding = getOutlinedPadding(theme, size);
        if (outlinedPadding) {
            paddingStyle.padding = outlinedPadding;
        }
    }

    const borderStyle: React.CSSProperties = {};

    if (idx >= 1) {
        borderStyle.borderLeft = `1px solid ${borderColor}`;
    }

    return cloneElement(child, {
      variant,
      color,
      size,
      ...rest,
      style: {
        ...(child.props.style || {}),
        ...borderRadiusStyle,
        ...borderStyle,
        ...paddingStyle,
      },
    });
  });

  return (
    <div className={className} style={groupStyle}>
      {buttons}
    </div>
  );
};
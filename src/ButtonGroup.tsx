import React, { Children, cloneElement, isValidElement, ReactElement } from "react";
import { ButtonGroup as MuiButtonGroup, ButtonGroupProps as MuiButtonGroupProps } from "@mui/material";
import { Button, ButtonProps } from "./Button";

export interface ButtonGroupProps {
  children: ReactElement<ButtonProps>[] | ReactElement<ButtonProps>;
  variant?: "text" | "outlined" | "contained";
  color?: "inherit" | "brand" | "neutral" | "success" | "error" | "info" | "warning";
  size?: "xsmall" | "small" | "medium" | "large";
  orientation?: "horizontal" | "vertical";
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  disableRipple?: boolean;
}

export const ButtonGroup = ({
  children,
  variant = "contained",
  color = "brand",
  size = "medium",
  className = "",
  style = {},
  orientation = "horizontal",
  disabled = false,
}: ButtonGroupProps) => {
  const childArray = Children.toArray(children)
    .filter(isValidElement)

  return (
    <MuiButtonGroup
      variant={variant}
      color={color}
      size={size}
      orientation={orientation}
      disabled={disabled}
      className={className}
      style={style}
    >
      {childArray}
    </MuiButtonGroup>
  );
};
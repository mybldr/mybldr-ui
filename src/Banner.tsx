import { Alert, AlertProps } from "@mui/material";
import { IconButton } from "./IconButton";
import { Close } from "@mui/icons-material";
import { forwardRef } from "react";

// Omit `slots` and `slotProps` because the closeIcon slots aren't implemented on this component
export interface BannerProps
  extends Omit<AlertProps, "variant" | "slots" | "slotProps"> {}

export const Banner = forwardRef<HTMLDivElement, BannerProps>(
  ({ onClose, action, closeText, severity = "success", ...props }, ref) => (
    <Alert
      ref={ref}
      severity={severity}
      variant="standard"
      action={
        <>
          {action}
          {onClose && (
            <IconButton
              color={props.color || severity}
              size="xsmall"
              icon={<Close />}
              title={closeText}
              onClick={onClose}
            />
          )}
        </>
      }
      {...props}
    />
  ),
);

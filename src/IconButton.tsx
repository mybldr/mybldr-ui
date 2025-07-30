import { forwardRef } from "react";
import { Button, ButtonProps } from "./Button";

export interface IconButtonProps extends Omit<ButtonProps, "children"> {
  icon: React.ReactNode;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, ...props }, ref) => (
    <Button ref={ref} {...props}>
      {icon}
    </Button>
  ),
);

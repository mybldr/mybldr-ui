import { styled, svgIconClasses } from "@mui/material";
import { Button, ButtonProps } from "./Button";
import { useIsPromisePending } from "./useIsPromisePending";

export interface IconButtonProps extends Omit<ButtonProps, "children"> {
  icon: React.ReactNode;
}

const StyledButton = styled(Button)({
  minWidth: "unset",
  [`& .${svgIconClasses.root}`]: {
    fontSize: "inherit",
  },
  padding: "8px",
  fontSize: "20px",
  variants: [
    {
      props: { size: "large" },
      style: {
        fontSize: "24px",
      },
    },
    {
      props: { size: "small" },
      style: {
        padding: "6px",
      },
    },
    {
      props: { size: "xsmall" },
      style: {
        padding: "4px",
      },
    },
  ],
});

export const IconButton = ({
  loading,
  onClick,
  icon,
  variant = "text",
  color = "neutral",
  ...props
}: IconButtonProps) => {
  const [isPending, observePromise] = useIsPromisePending();
  const isLoading = isPending || loading;

  return (
    <StyledButton
      {...props}
      variant={variant}
      loading={isLoading}
      color={color}
      onClick={onClick ? observePromise(onClick) : onClick}
    >
      {icon}
    </StyledButton>
  );
};

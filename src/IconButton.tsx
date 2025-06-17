import { styled, svgIconClasses } from "@mui/material";
import { Button, ButtonProps } from "./Button";
import { useIsPromisePending } from "./useIsPromisePending";

export interface IconButtonProps extends Omit<ButtonProps, "children"> {
  icon: React.ReactNode;
}

const StyledButton = styled(Button)({
  minWidth: "unset",
  padding: "8px",
  [`& .${svgIconClasses.root}`]: {
    fontSize: "inherit",
  },
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
  ],
});

export const IconButton = ({
  loading,
  onClick,
  icon,
  variant = "text",
  color = "secondary",
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

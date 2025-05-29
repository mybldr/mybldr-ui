import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { useIsPromisePending } from "./useIsPromisePending";

export type ButtonProps = MuiButtonProps;

export const Button = ({ loading, onClick, ...props }: ButtonProps) => {
  const [isPending, observePromise] = useIsPromisePending();
  const isLoading = isPending || loading;

  return (
    <MuiButton
      {...props}
      loading={isLoading}
      onClick={onClick ? observePromise(onClick) : onClick}
    />
  );
};

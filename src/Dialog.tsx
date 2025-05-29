import { Close } from "@mui/icons-material";
import {
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogProps as MuiDialogProps,
  DialogTitle,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { useIsPromisePending } from "./useIsPromisePending";
import { Button, ButtonProps } from "./Button";

export interface DialogProps
  extends Omit<MuiDialogProps, "onClose" | "title" | "content"> {
  onClose: (
    event?: any,
    reason?: "backdropClick" | "escapeKeyDown" | "cancelClick",
  ) => void;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  content?: React.ReactNode;
  actions?: ButtonProps[];
  onSubmit?: () => Promise<void> | void;
  primaryAction?: {
    color?: ButtonProps["color"];
    onClick: () => Promise<void> | void;
    text: string;
  };
  dismissActionText?: string;
  tertiaryAction?: {
    onClick: () => Promise<void> | void;
    text: string;
  };
  actionDetails?: React.ReactNode;
  showDivider: boolean;
  isLoading?: boolean;
}

export const Dialog = ({
  title,
  subtitle,
  children,
  content,
  actions,
  primaryAction,
  dismissActionText = "Cancel",
  tertiaryAction,
  actionDetails,
  showDivider,
  isLoading,
  ...props
}: DialogProps) => {
  const [isPending, observePromise] = useIsPromisePending();
  const isDisabled = isPending || isLoading;

  return (
    <MuiDialog {...props}>
      <IconButton
        disabled={isDisabled}
        aria-label="close"
        onClick={(e) => props.onClose?.(e, "cancelClick")}
        sx={{
          position: "absolute",
          right: 10,
          top: 10,
          color: "black",
        }}
      >
        <Close />
      </IconButton>
      {title && (
        <DialogTitle>
          {title}
          {subtitle && <Typography variant="body2">{subtitle}</Typography>}
        </DialogTitle>
      )}
      {content && (
        <DialogContent dividers={showDivider}>{content}</DialogContent>
      )}
      {children}
      <DialogActions>
        {tertiaryAction && (
          <Button
            disabled={isDisabled}
            variant="text"
            onClick={observePromise(tertiaryAction.onClick)}
          >
            {tertiaryAction.text}
          </Button>
        )}
        {actionDetails}
        <Box sx={{ marginRight: "auto" }} />
        <Button
          disabled={isDisabled}
          variant="outlined"
          color="secondary"
          onClick={(e) => props.onClose?.(e, "cancelClick")}
        >
          {dismissActionText}
        </Button>
        {primaryAction && (
          <Button
            disabled={isDisabled}
            variant="contained"
            color={primaryAction.color}
            onClick={observePromise(primaryAction.onClick)}
          >
            {primaryAction.text}
          </Button>
        )}
      </DialogActions>
    </MuiDialog>
  );
};

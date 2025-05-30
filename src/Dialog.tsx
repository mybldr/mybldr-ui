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
  CircularProgress,
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
  showLoadingOverlay?: boolean;
  isLoading?: boolean;
}

export const Dialog = ({
  title,
  subtitle,
  children,
  content,
  primaryAction,
  dismissActionText = "Cancel",
  tertiaryAction,
  actionDetails,
  showDivider,
  showLoadingOverlay,
  isLoading,
  ...props
}: DialogProps) => {
  const [isPending, observePromise] = useIsPromisePending();
  const isLoadingOrPending = isPending || isLoading;

  return (
    <MuiDialog {...props}>
      {isLoadingOrPending && showLoadingOverlay && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.7)", // Semi-transparent white background
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <CircularProgress size={50} />
        </Box>
      )}
      <IconButton
        disabled={isLoadingOrPending}
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
            disabled={isLoadingOrPending}
            variant="text"
            onClick={observePromise(tertiaryAction.onClick)}
          >
            {tertiaryAction.text}
          </Button>
        )}
        {actionDetails}
        <Box sx={{ marginRight: "auto" }} />
        <Button
          disabled={isLoadingOrPending}
          variant="outlined"
          color="secondary"
          onClick={(e) => props.onClose?.(e, "cancelClick")}
        >
          {dismissActionText}
        </Button>
        {primaryAction && (
          <Button
            disabled={isLoadingOrPending}
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

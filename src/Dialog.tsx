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
import { useIsScrollable } from "./useIsScrollable";

export interface DialogAction extends Pick<ButtonProps, "onClick" | "color"> {
  label: string;
}

export interface DialogProps
  extends Omit<MuiDialogProps, "onClose" | "title" | "content"> {
  onClose: (
    event?: any,
    reason?: "backdropClick" | "escapeKeyDown" | "cancelClick",
  ) => void;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  content?: React.ReactNode;
  primaryAction?: DialogAction;
  dismissActionText?: string;
  tertiaryAction?: DialogAction;
  actionDetails?: React.ReactNode;
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
  showLoadingOverlay,
  isLoading,
  ...props
}: DialogProps) => {
  const [isPending, observePromise] = useIsPromisePending();
  const [isScrollable, ref] = useIsScrollable();
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
          right: 12,
          top: 12,
          color: "black",
        }}
      >
        <Close fontSize="inherit" />
      </IconButton>
      {title && (
        <DialogTitle>
          {title}
          {subtitle && <Typography variant="body2">{subtitle}</Typography>}
        </DialogTitle>
      )}
      {content && (
        <DialogContent
          ref={ref}
          dividers={isScrollable}
          sx={(theme) => ({
            transition: theme.transitions.create(["padding"]),
          })}
        >
          {content}
        </DialogContent>
      )}
      {children}
      <DialogActions>
        {tertiaryAction && (
          <Button
            disabled={isLoadingOrPending}
            variant="text"
            {...tertiaryAction}
            onClick={
              tertiaryAction.onClick
                ? observePromise(tertiaryAction.onClick)
                : tertiaryAction.onClick
            }
          >
            {tertiaryAction.label}
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
            {...primaryAction}
            onClick={
              primaryAction.onClick
                ? observePromise(primaryAction.onClick)
                : primaryAction.onClick
            }
          >
            {primaryAction.label}
          </Button>
        )}
      </DialogActions>
    </MuiDialog>
  );
};

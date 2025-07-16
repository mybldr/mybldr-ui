import { Close } from "@mui/icons-material";
import {
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogProps as MuiDialogProps,
  DialogTitle,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { useIsPromisePending } from "./useIsPromisePending";
import { Button, ButtonProps } from "./Button";
import { IconButton } from "./IconButton";
import { useIsScrollable } from "./useIsScrollable";

export interface DialogAction extends Pick<ButtonProps, "onClick" | "color"> {
  label: string;
}

export interface DialogProps
  extends Omit<MuiDialogProps, "onClose" | "title" | "content"> {
  onClose: (
    event: any,
    reason: "backdropClick" | "escapeKeyDown" | "cancelClick",
  ) => void;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  content?: React.ReactNode;
  primaryAction?: DialogAction;
  dismissActionLabel?: string;
  tertiaryAction?: DialogAction;
  actionDetails?: React.ReactNode;
  showLoadingOverlay?: boolean;
  isLoading?: boolean;
}

// Dialog content is self contained to prevent buggy behavior with refs and portals
export const PortaledDialog = ({
  title,
  subtitle,
  children,
  content,
  primaryAction,
  dismissActionLabel = "Cancel",
  tertiaryAction,
  actionDetails,
  showLoadingOverlay,
  isLoading,
  onClose,
}: Pick<
  DialogProps,
  | "title"
  | "subtitle"
  | "children"
  | "content"
  | "primaryAction"
  | "dismissActionLabel"
  | "tertiaryAction"
  | "actionDetails"
  | "showLoadingOverlay"
  | "isLoading"
  | "onClose"
>) => {
  const [isPending, observePromise] = useIsPromisePending();
  const [isScrollable, ref] = useIsScrollable();
  const isLoadingOrPending = isPending || isLoading;

  return (
    <>
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
        icon={<Close />}
        disabled={isLoadingOrPending}
        aria-label="close"
        onClick={(e) => onClose(e, "cancelClick")}
        sx={{
          position: "absolute",
          right: 12,
          top: 12,
        }}
      />
      {title && (
        <DialogTitle>
          {title}
          {subtitle && (
            <Typography variant="body2" sx={{ mt: "4px" }}>
              {subtitle}
            </Typography>
          )}
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
      <DialogActions sx={{ pt: isScrollable ? undefined : "4px" }}>
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
        <Box sx={{ pl: "12px" }}>{actionDetails}</Box>
        <Box sx={{ marginRight: "auto" }} />
        <Button
          disabled={isLoadingOrPending}
          variant="outlined"
          color="neutral"
          onClick={(e) => onClose(e, "cancelClick")}
        >
          {dismissActionLabel}
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
    </>
  );
};

export const Dialog = ({
  title,
  subtitle,
  children,
  content,
  primaryAction,
  dismissActionLabel,
  tertiaryAction,
  actionDetails,
  showLoadingOverlay,
  isLoading,
  ...props
}: DialogProps) => (
  <MuiDialog {...props}>
    <PortaledDialog
      title={title}
      subtitle={subtitle}
      content={content}
      primaryAction={primaryAction}
      dismissActionLabel={dismissActionLabel}
      tertiaryAction={tertiaryAction}
      actionDetails={actionDetails}
      showLoadingOverlay={showLoadingOverlay}
      isLoading={isLoading}
      onClose={props.onClose}
    >
      {children}
    </PortaledDialog>
  </MuiDialog>
);

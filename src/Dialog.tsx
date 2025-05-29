import { Close } from "@mui/icons-material";
import {
  Button,
  ButtonProps,
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogProps as MuiDialogProps,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";

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
  ...props
}: DialogProps) => {
  return (
    <MuiDialog {...props}>
      <IconButton
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
      {content && <DialogContent>{content}</DialogContent>}
      {children}
      <DialogActions>
        {actionDetails}
        {tertiaryAction && (
          <Button variant="text" onClick={tertiaryAction.onClick}>
            {tertiaryAction.text}
          </Button>
        )}
        <Button
          sx={{ marginLeft: "auto" }}
          variant="outlined"
          color="secondary"
          onClick={(e) => props.onClose?.(e, "cancelClick")}
        >
          {dismissActionText}
        </Button>
        {primaryAction && (
          <Button
            variant="contained"
            color={primaryAction.color}
            onClick={primaryAction.onClick}
          >
            {primaryAction.text}
          </Button>
        )}
      </DialogActions>
    </MuiDialog>
  );
};

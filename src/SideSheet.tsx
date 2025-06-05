import { Close } from "@mui/icons-material";
import {
  Box,
  BoxProps,
  Drawer,
  DrawerProps,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import { Button, ButtonProps } from "./Button";
import { useIsPromisePending } from "./useIsPromisePending";
import { useIsScrollable } from "./useIsScrollable";

export interface SideSheetContainer extends BoxProps {
  sideSheet: React.ReactNode;
}

export const SideSheetContainer = ({
  sideSheet,
  children,
  sx,
  ...props
}: SideSheetContainer) => (
  <Box
    sx={[...(Array.isArray(sx) ? sx : [sx]), { display: "flex" }]}
    {...props}
  >
    <Box>{children}</Box>
    {sideSheet}
  </Box>
);

export interface SideSheetAction
  extends Pick<ButtonProps, "onClick" | "color"> {
  label: string;
}

export interface SideSheetProps extends Omit<DrawerProps, "onClose" | "title"> {
  width: string | number;
  title: React.ReactNode;
  primaryAction?: SideSheetAction;
  secondaryAction?: SideSheetAction;
  isLoading?: boolean;
  onClose: (
    event: any,
    reason: "backdropClick" | "escapeKeyDown" | "cancelClick",
  ) => void;
}

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (props) => props !== "width",
})<Omit<SideSheetProps, "title">>(({ theme, width }) => ({
  width,
  "& .MuiDrawer-paper": {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    width,
  },
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width,
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        width: 0,
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
    },
  ],
}));

export const SideSheet = ({
  children,
  title,
  primaryAction,
  secondaryAction,
  isLoading,
  ...props
}: SideSheetProps) => {
  const [isPending, observePromise] = useIsPromisePending();
  const isLoadingOrPending = isPending || isLoading;
  const [isScrollable, ref] = useIsScrollable();

  return (
    <StyledDrawer {...props}>
      {typeof title === "string" ? (
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={(theme) => ({
            padding: "8px 48px 8px 16px",
            borderBottom: `1px solid ${theme.palette.divider}`,
          })}
        >
          {title}
        </Typography>
      ) : (
        title
      )}
      <IconButton
        aria-label="close"
        disabled={isLoadingOrPending}
        onClick={(e) => props.onClose?.(e, "cancelClick")}
        sx={{
          position: "absolute",
          right: 4,
          top: 4,
        }}
      >
        <Close fontSize="inherit" />
      </IconButton>
      <Box ref={ref} style={{ flex: 1, padding: "16px", overflowY: "auto" }}>
        {children}
      </Box>
      <Box
        sx={(theme) => ({
          background: theme.palette.background.paper,
          borderTop: isScrollable
            ? `1px solid ${theme.palette.divider}`
            : undefined,
          display: "flex",
          justifyContent: "flex-end",
          gap: "8px",
          padding: "12px",
        })}
      >
        {secondaryAction && (
          <Button
            disabled={isLoadingOrPending}
            variant="outlined"
            color="secondary"
            {...primaryAction}
            onClick={
              secondaryAction.onClick
                ? observePromise(secondaryAction.onClick)
                : secondaryAction.onClick
            }
          >
            {secondaryAction.label}
          </Button>
        )}
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
      </Box>
    </StyledDrawer>
  );
};

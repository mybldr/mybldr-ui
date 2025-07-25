import { Close } from "@mui/icons-material";
import { Box, Drawer, DrawerProps, styled, Typography } from "@mui/material";
import { Button, ButtonProps } from "./Button";
import { IconButton } from "./IconButton";
import { useIsPromisePending } from "./useIsPromisePending";
import { useIsScrollable } from "./useIsScrollable";

export interface SideSheetAction
  extends Pick<ButtonProps, "onClick" | "color"> {
  label: string;
}

export interface DrawerPropsWithWidth extends DrawerProps {
  width: string | number;
}

export interface SideSheetProps
  extends Omit<DrawerPropsWithWidth, "onClose" | "title"> {
  sideSheet: React.ReactNode;
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
})<DrawerPropsWithWidth>(({ theme, width }) => ({
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

// SideSheet content is self contained to prevent buggy behavior with refs and portals
export const PortaledSideSheet = ({
  children,
  title,
  primaryAction,
  secondaryAction,
  isLoading,
  onClose,
}: Pick<
  SideSheetProps,
  | "children"
  | "title"
  | "primaryAction"
  | "secondaryAction"
  | "isLoading"
  | "onClose"
>) => {
  const [isPending, observePromise] = useIsPromisePending();
  const isLoadingOrPending = isPending || isLoading;
  const [isScrollable, ref] = useIsScrollable();

  return (
    <>
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
        icon={<Close />}
        aria-label="close"
        disabled={isLoadingOrPending}
        onClick={(e) => onClose(e, "cancelClick")}
        sx={{
          position: "absolute",
          right: 4,
          top: 4,
        }}
      />
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
            color="neutral"
            {...secondaryAction}
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
    </>
  );
};

export const SideSheet = ({
  children,
  title,
  primaryAction,
  secondaryAction,
  isLoading,
  sideSheet,
  sx,
  ...props
}: SideSheetProps) => (
  <Box sx={[...(Array.isArray(sx) ? sx : [sx]), { display: "flex" }]}>
    <Box>{children}</Box>
    <StyledDrawer {...props}>
      <PortaledSideSheet
        title={title}
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
        isLoading={isLoading}
        onClose={props.onClose}
      >
        {sideSheet}
      </PortaledSideSheet>
    </StyledDrawer>
  </Box>
);

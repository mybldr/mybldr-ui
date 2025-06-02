import { ErrorOutline } from "@mui/icons-material";
import {
  styled,
  TextFieldProps as MuiTextFieldProps,
  TextField as MuiTextField,
  alpha,
  InputAdornment,
} from "@mui/material";
import { mergeSlotProps } from "@mui/material/utils";
import { FC } from "react";

declare module "@mui/material/TextField" {
  interface TextFieldPropsSizeOverrides {
    large: true;
  }
}

export const TEXT_FIELD_PADDING_X = 12;
export const GET_TEXT_FIELD_PADDING = (
  size: "small" | "medium" | "large" = "medium",
) => {
  switch (size) {
    case "small":
      return 6;
    case "large":
      return 10;
    default:
      return 8;
  }
};

const StyledTextField = styled(MuiTextField)(({ theme, size, error }) => ({
  // Prevent label from highlighting in different states
  "& .MuiInputLabel-root.Mui-focused, & .MuiInputLabel-root.Mui-error": {
    color: theme.palette.text.secondary,
  },
  // Internal input padding and font size
  "& .MuiInputBase-input": {
    padding: `${GET_TEXT_FIELD_PADDING(size)}px ${TEXT_FIELD_PADDING_X}px`,
    paddingLeft: error ? 0 : TEXT_FIELD_PADDING_X,
    fontSize: size === "small" ? "14px" : "16px",
  },
  "& .MuiInputBase-root": {
    padding: 0,
    paddingLeft: error ? TEXT_FIELD_PADDING_X : 0,
  },
  // Add transition to border component
  // Adjust top because legend is hidden
  "& .MuiOutlinedInput-notchedOutline": {
    top: "0px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
  },
  // Hide legend to avoid pixel gap on border
  "& .MuiOutlinedInput-notchedOutline legend": {
    display: "none",
  },
  // Add custom focus styles to border component
  "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    borderColor: theme.palette.primary.main,
    borderWidth: "1px",
  },
}));

export type TextFieldProps = MuiTextFieldProps;

export const TextField: FC<TextFieldProps> = ({ ...props }) => {
  return (
    <StyledTextField
      variant="outlined"
      {...props}
      slotProps={{
        ...props.slotProps,
        input: mergeSlotProps(props.slotProps?.input, {
          startAdornment: props.error ? (
            <InputAdornment position="start">
              <ErrorOutline color="error" />
            </InputAdornment>
          ) : undefined,
        }),
        inputLabel: mergeSlotProps(props.slotProps?.inputLabel, {
          // Prevent label animation when focusing input
          shrink: true,
        }),
      }}
    />
  );
};

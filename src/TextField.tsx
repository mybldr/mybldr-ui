import { ErrorOutline } from "@mui/icons-material";
import {
  styled,
  TextFieldProps as MuiTextFieldProps,
  TextField as MuiTextField,
  alpha,
  InputAdornment,
  Tooltip,
  lighten,
} from "@mui/material";
import { mergeSlotProps } from "@mui/material/utils";
import { FC } from "react";

export const TEXT_FIELD_PADDING_X = 12;
export const TEXT_FIELD_PADDING_Y = 8;
export const TEXT_FIELD_SMALL_PADDING_Y = 6;

const StyledTextField = styled(MuiTextField)(({ theme, size, error }) => ({
  // Prevent label from highlighting when focused.
  "& .MuiInputLabel-root.Mui-focused": {
    color: theme.palette.text.secondary,
  },
  "& .MuiInputLabel-root.Mui-error": {
    color: theme.palette.text.secondary,
  },
  // Internal input padding.
  "& .MuiInputBase-input": {
    padding: `${size === "small" ? TEXT_FIELD_SMALL_PADDING_Y : TEXT_FIELD_PADDING_Y}px ${TEXT_FIELD_PADDING_X}px`,
    paddingLeft: error ? 0 : TEXT_FIELD_PADDING_X,
  },
  // Remove padding from root component.
  // Also prevents Autocomplete from overriding padding.
  "& .MuiOutlinedInput-root": {
    padding: "0px",
    paddingLeft: error ? TEXT_FIELD_PADDING_X : 0,
  },
  "& .MuiOutlinedInput-root.MuiInputBase-sizeSmall": {
    padding: "0px",
  },
  // Add transition to border component
  "& .MuiOutlinedInput-notchedOutline": {
    top: "0px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
  },
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

import {
  styled,
  TextFieldProps as MuiTextFieldProps,
  TextField as MuiTextField,
  alpha,
} from "@mui/material";
import { mergeSlotProps } from "@mui/material/utils";
import { FC } from "react";

export const TEXT_FIELD_PADDING_X = 12;
export const TEXT_FIELD_PADDING_Y = 8;
export const TEXT_FIELD_SMALL_PADDING_Y = 6;

const StyledTextField = styled(MuiTextField)(({ theme, size }) => ({
  // Label position.
  "& .MuiInputLabel-root": {
    color: theme.palette.text.secondary,
    top: "-12px",
    left: "-12px",
  },
  // Prevent label from highlighting when focused.
  "& .MuiInputLabel-root.Mui-focused": {
    color: theme.palette.text.secondary,
  },
  // Internal input padding.
  "& .MuiInputBase-input": {
    padding: `${size === "small" ? TEXT_FIELD_SMALL_PADDING_Y : TEXT_FIELD_PADDING_Y}px ${TEXT_FIELD_PADDING_X}px`,
  },
  // Remove padding from root component.
  // Also prevents Autocomplete from overriding padding.
  "& .MuiOutlinedInput-root": {
    padding: "0px",
  },
  "& .MuiOutlinedInput-root.MuiInputBase-sizeSmall": {
    padding: "0px",
  },
  // Add transition to border component
  "& .MuiOutlinedInput-notchedOutline": {
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
  },
  // Add custom focus styles to border component
  "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    borderColor: theme.palette.primary.main,
    borderWidth: "1px",
  },
}));

export type TextFieldProps = Omit<MuiTextFieldProps, "variant">;

export const TextField: FC<TextFieldProps> = (props) => {
  return (
    <StyledTextField
      {...props}
      variant="outlined"
      slotProps={{
        ...props.slotProps,
        input: mergeSlotProps(props.slotProps?.input, {
          // Hide label background that covers the border
          label: "",
        }),
        inputLabel: mergeSlotProps(props.slotProps?.inputLabel, {
          // Prevent label animation when focusing input
          shrink: true,
        }),
      }}
    />
  );
};

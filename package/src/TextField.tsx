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
  "& .MuiInputLabel-root": {
    color: theme.palette.text.secondary,
    top: "-12px",
    left: "-12px",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: theme.palette.text.secondary,
  },
  "& .MuiInputBase-input": {
    padding: `${size === "small" ? TEXT_FIELD_SMALL_PADDING_Y : TEXT_FIELD_PADDING_Y}px ${TEXT_FIELD_PADDING_X}px`,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
  },
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
          label: "",
        }),
        inputLabel: mergeSlotProps(props.slotProps?.inputLabel, {
          shrink: true,
        }),
      }}
    />
  );
};

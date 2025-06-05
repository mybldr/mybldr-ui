import { ErrorOutline } from "@mui/icons-material";
import {
  styled,
  TextFieldProps as MuiTextFieldProps,
  TextField as MuiTextField,
  alpha,
  InputAdornment,
  FormLabel,
  inputBaseClasses,
  outlinedInputClasses,
} from "@mui/material";
import { mergeSlotProps } from "@mui/material/utils";
import { FC, useId } from "react";

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
      return 12;
    default:
      return 8;
  }
};

const StyledTextField = styled(MuiTextField, {
  shouldForwardProp: (props) => props !== "implied",
})<TextFieldProps>(({ theme, size, error, implied }) => ({
  // Internal input padding and font size
  [`& .${inputBaseClasses.input}`]: {
    padding: `${GET_TEXT_FIELD_PADDING(size)}px ${TEXT_FIELD_PADDING_X}px`,
    paddingLeft: error ? 0 : TEXT_FIELD_PADDING_X,
    fontSize: size === "small" ? "14px" : "16px",
    lineHeight: size === "small" ? "20px" : "24px",
    minHeight: size === "small" ? "20px" : "24px",
  },
  [`& .${inputBaseClasses.root}`]: {
    // Removes padding from root when `multiline` is true
    padding: 0,
    paddingLeft: error ? TEXT_FIELD_PADDING_X : 0,
  },
  // Add transition to border component
  // Adjust top because legend is hidden
  [`& .${outlinedInputClasses.notchedOutline}`]: {
    top: 0,
    borderWidth: implied ? 0 : undefined,
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
  },
  // Add custom focus styles to border component
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
    {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderWidth: "1px",
    },
  // Hide legend to avoid pixel gap on border
  [`& .${outlinedInputClasses.notchedOutline} legend`]: {
    display: "none",
  },
}));

export type TextFieldProps = MuiTextFieldProps & { implied?: boolean };

export const TextField: FC<TextFieldProps> = ({
  implied,
  label,
  id: idOverride,
  ...props
}) => {
  // Copy MUIs pattern to connect the label to the input
  // https://github.com/mui/material-ui/blob/e75d887056a75ae57c740ef8c8581b995d930e5c/packages/mui-material/src/TextField/TextField.js#L136
  const reactId = useId();
  const id = idOverride ?? reactId;
  return (
    <>
      {implied ? (
        <FormLabel
          htmlFor={id}
          sx={(theme) => ({
            color: theme.palette.text.secondary,
          })}
          required={props.required}
          disabled={props.disabled}
          focused={props.focused}
          error={props.error}
        >
          {label}
        </FormLabel>
      ) : null}
      <StyledTextField
        variant="outlined"
        {...props}
        implied={implied}
        label={implied ? "" : label}
        id={id}
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
    </>
  );
};

import {
  styled,
  TextFieldProps,
  TextField as MuiTextField,
} from "@mui/material";
import { FC } from "react";

// TODO: Finalize the API and styles for this component in a dedicated task
const StyledTextField = styled(MuiTextField)(({ theme }) => ({
  "> label": {
    top: "-12px",
    left: "-10px",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
    color: theme.palette.text.primary,
  },

  marginTop: "24px",
  width: "320px",
}));

export const TextField: FC<TextFieldProps> = (props) => {
  return (
    <StyledTextField
      {...props}
      InputLabelProps={{ ...props.InputLabelProps, shrink: true }}
      InputProps={{ ...props.InputProps, label: "" }}
    />
  );
};

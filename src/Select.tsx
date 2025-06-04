import { MenuItem, mergeSlotProps, Typography } from "@mui/material";
import { TextField, TextFieldProps } from "./TextField";
import { KeyboardArrowDown } from "@mui/icons-material";

export interface SelectProps<Value> extends Omit<TextFieldProps, "select"> {
  options: Array<{ value: Value; label: string }>;
}

export const Select = <Value extends string | number>({
  options,
  placeholder,
  ...props
}: SelectProps<Value>) => (
  <TextField
    {...props}
    select
    slotProps={{
      ...props.slotProps,
      select: mergeSlotProps(props.slotProps?.select, {
        IconComponent: KeyboardArrowDown,
        displayEmpty: Boolean(placeholder),
        renderValue:
          props.value === ""
            ? () => (
                <Typography color="textPlaceholder">{placeholder}</Typography>
              )
            : undefined,
      }),
    }}
  >
    {options.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </TextField>
);

import { KeyboardArrowDown } from "@mui/icons-material";
import {
  styled,
  AutocompleteRenderInputParams,
  ChipTypeMap,
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
} from "@mui/material";
import { useCallback } from "react";
import { TextField } from "./TextField";

export interface AutocompleteProps<
  Value,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"],
> extends MuiAutocompleteProps<
    Value,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  > {
  label?: string;
  placeholder?: string;
}

export const Autocomplete = <
  Value,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"],
>({
  placeholder,
  label,
  renderInput,
  sx,
  ...props
}: AutocompleteProps<
  Value,
  Multiple,
  DisableClearable,
  FreeSolo,
  ChipComponent
>) => {
  const defaultRenderInput = useCallback(
    ({
      InputProps,
      InputLabelProps,
      ...params
    }: AutocompleteRenderInputParams) => (
      <TextField
        {...params}
        label={label}
        placeholder={placeholder}
        slotProps={{ input: InputProps, inputLabel: InputLabelProps }}
      />
    ),
    [placeholder],
  );

  return (
    <MuiAutocomplete
      {...props}
      popupIcon={<KeyboardArrowDown />}
      slotProps={{
        popper: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 8],
              },
            },
          ],
        },
      }}
      renderInput={renderInput ?? defaultRenderInput}
      sx={[
        ...(Array.isArray(sx) ? sx : [sx]),
        {
          "& .MuiOutlinedInput-root": {
            padding: "0px",
          },
          "& .MuiOutlinedInput-root.MuiInputBase-sizeSmall": {
            padding: "0px",
          },
          "& .MuiOutlinedInput-root .MuiAutocomplete-input": {
            padding: `8px 12px`,
          },
          "& .MuiOutlinedInput-root.MuiInputBase-sizeSmall .MuiAutocomplete-input":
            {
              padding: `6px 12px`,
            },
        },
      ]}
    />
  );
};

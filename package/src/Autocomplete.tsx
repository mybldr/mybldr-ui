import {
  AutocompleteRenderInputParams,
  ChipTypeMap,
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
} from "@mui/material";
import { useCallback } from "react";
import { TextField } from "./TextField";

interface AutocompleteProps<
  Value,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"]
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
  ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"]
>({
  placeholder,
  label,
  renderInput,
  ...props
}: AutocompleteProps<
  Value,
  Multiple,
  DisableClearable,
  FreeSolo,
  ChipComponent
>) => {
  const defaultRenderInput = useCallback(
    (params: AutocompleteRenderInputParams) => (
      <TextField label={label} placeholder={placeholder} {...params} />
    ),
    [placeholder]
  );

  return (
    <MuiAutocomplete
      {...props}
      renderInput={renderInput ?? defaultRenderInput}
    />
  );
};

export type { AutocompleteProps };

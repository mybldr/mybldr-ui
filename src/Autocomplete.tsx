import { KeyboardArrowDown } from "@mui/icons-material";
import {
  styled,
  AutocompleteRenderInputParams,
  ChipTypeMap,
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
  mergeSlotProps,
} from "@mui/material";
import { useCallback } from "react";
import {
  TEXT_FIELD_PADDING_X,
  TEXT_FIELD_PADDING_Y,
  TEXT_FIELD_SMALL_PADDING_Y,
  TextField,
} from "./TextField";

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
        // MUI Autocomplete uses the deprecated InputProps and InputLabelProps API.
        // Since the wrapped TextField uses slotProps, the InputProps and InputLabelProps from Autocomplete are ignored.
        // InputProps and InputLabelProps are passed to their respective slotProp as a workaround.
        slotProps={{ input: InputProps, inputLabel: InputLabelProps }}
      />
    ),
    [placeholder, label],
  );

  return (
    <MuiAutocomplete
      {...props}
      popupIcon={<KeyboardArrowDown />}
      slotProps={{
        ...props.slotProps,
        popper: mergeSlotProps(props.slotProps?.popper, {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 8],
              },
            },
          ],
        }),
      }}
      renderInput={renderInput ?? defaultRenderInput}
      sx={[
        ...(Array.isArray(sx) ? sx : [sx]),
        // MUI Autocomplete has custom styles for a nested TextField input, so these styles are necessary overrides.
        // This is done in the `sx` prop because the `styled` utility doesn't handle generic component props.
        {
          "& .MuiOutlinedInput-root .MuiAutocomplete-input": {
            padding: `${TEXT_FIELD_PADDING_Y}px ${TEXT_FIELD_PADDING_X}px`,
          },
          "& .MuiOutlinedInput-root.MuiInputBase-sizeSmall .MuiAutocomplete-input":
            {
              padding: `${TEXT_FIELD_SMALL_PADDING_Y}px ${TEXT_FIELD_PADDING_X}px`,
            },
        },
      ]}
    />
  );
};

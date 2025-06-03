import { KeyboardArrowDown } from "@mui/icons-material";
import {
  AutocompleteRenderInputParams,
  ChipTypeMap,
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
  inputBaseClasses,
  mergeSlotProps,
  outlinedInputClasses,
  autocompleteClasses,
} from "@mui/material";
import { useCallback } from "react";
import {
  TextField,
  GET_TEXT_FIELD_PADDING,
  TEXT_FIELD_PADDING_X,
} from "./TextField";

declare module "@mui/material/Autocomplete" {
  interface AutocompletePropsSizeOverrides {
    large: true;
  }
}

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
          [`& .${outlinedInputClasses.root}, & .${outlinedInputClasses.root}.${inputBaseClasses.sizeSmall}`]:
            {
              padding: "0px",
              paddingRight: "39px",
            },
          [`& .${outlinedInputClasses.root} .${autocompleteClasses.input}, & .${outlinedInputClasses.root}.${inputBaseClasses.sizeSmall} .${autocompleteClasses.input}`]:
            {
              padding: `${GET_TEXT_FIELD_PADDING(props.size)}px ${TEXT_FIELD_PADDING_X}px`,
            },
        },
      ]}
    />
  );
};

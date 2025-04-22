import {
  AutocompleteRenderInputParams,
  Box,
  ChipTypeMap,
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";
import { useCallback } from "react";

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
  containerSx?: SxProps;
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
  containerSx,
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
    (params: AutocompleteRenderInputParams) => (
      <TextField placeholder={placeholder} {...params} />
    ),
    [placeholder]
  );

  return (
    <Box sx={containerSx}>
      {label && (
        <Typography variant="body1" color="text.primary" fontWeight="500">
          {label}
        </Typography>
      )}
      <MuiAutocomplete
        {...props}
        sx={{
          width: "320px", // Default width provided in Figma, but can be overridden via SX
          ...sx,
        }}
        renderInput={renderInput ?? defaultRenderInput}
      />
    </Box>
  );
};

export type { AutocompleteProps };

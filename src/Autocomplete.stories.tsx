import type { Meta, StoryObj } from "@storybook/react";

import { Autocomplete } from "./Autocomplete";

const meta = {
  title: "Autocomplete",
  component: Autocomplete,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Autocomplete>;

export default meta;

type Story = StoryObj<typeof Autocomplete>;

export const AutocompleteWithLabel: Story = {
  argTypes: {
    sx: {
      table: {
        // Hide sx from control panel
        disable: true,
      },
    },
  },
  args: {
    sx: { width: "300px" },
    label: "Label",
    size: "medium",
    placeholder: "Placeholder",
    options: [
      {
        value: "1",
        label: "Option 1",
      },
      {
        value: "2",
        label: "Option 2",
      },
      {
        value: "3",
        label: "Option 3",
      },
      {
        value: "4",
        label: "Option 4",
      },
      {
        value: "5",
        label: "Option 5",
      },
      {
        value: "6",
        label: "Option 6",
      },
      {
        value: "7",
        label: "Option 7",
      },
      {
        value: "8",
        label: "Option 8",
      },
    ],
  },
};

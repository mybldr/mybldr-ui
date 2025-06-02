import type { Meta, StoryObj } from "@storybook/react";

import { Autocomplete } from "./Autocomplete";

const meta = {
  title: "Autocomplete",
  component: Autocomplete,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "radio",
      },
      // Override options because docgen doesn't pick up "large" override
      options: ["small", "medium", "large"],
    },
  },
} satisfies Meta<typeof Autocomplete>;

export default meta;

type Story = StoryObj<typeof Autocomplete>;

export const BaseAutocomplete: Story = {
  args: {
    sx: { width: "300px" },
    label: "Label",
    placeholder: "Placeholder",
    options: new Array(8).fill(0).map((_, i) => ({
      value: i,
      label: `Option ${i + 1}`,
    })),
  },
};

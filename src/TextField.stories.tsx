import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "./TextField";

const meta = {
  title: "TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof TextField>;

export const BaseTextField: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
  },
};

export const TextFieldWithError: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    error: true,
    helperText: "Something is wrong",
  },
};

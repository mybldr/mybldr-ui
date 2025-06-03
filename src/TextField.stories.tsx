import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "./TextField";

const meta = {
  title: "TextField",
  component: TextField,
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

export const TextFieldMultiline: Story = {
  args: {
    sx: { width: "300px" },
    label: "Label",
    placeholder: "Placeholder",
    multiline: true,
    maxRows: 5,
    minRows: 2,
  },
};

export const TextFieldImplied: Story = {
  decorators: [
    (story) => (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {story()}
      </div>
    ),
  ],
  args: {
    implied: true,
    label: "Label",
    placeholder: "Placeholder",
  },
};

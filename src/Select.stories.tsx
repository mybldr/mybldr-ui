import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";

const meta = {
  title: "Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

export const BaseSelect: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    sx: { width: "200px" },
    options: new Array(8).fill(0).map((_, i) => ({
      value: i,
      label: `Option ${i + 1}`,
    })),
  },
};

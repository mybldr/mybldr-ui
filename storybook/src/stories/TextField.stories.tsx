import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "@mybldr/ui";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
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

export const TextFieldWithLabel: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    size: "medium",
  },
};

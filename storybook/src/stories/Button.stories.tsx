import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonProps } from "@mybldr/ui";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<ButtonProps>;

export const Contained: Story = {
  args: {
    variant: "contained",
    children: "Primary Button",
  },
};

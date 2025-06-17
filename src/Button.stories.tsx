import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const BaseButton: Story = {
  args: {
    children: "Label",
    variant: "contained",
  },
};

export const LoadingButton: Story = {
  args: {
    children: "Label",
    variant: "contained",
    onClick: async () =>
      await new Promise((resolve) => setTimeout(resolve, 1000)),
  },
};

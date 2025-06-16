import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { HouseOutlined } from "@mui/icons-material";

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

export const ButtonWithStartIcon: Story = {
  args: {
    children: "Label",
    variant: "contained",
    startIcon: <HouseOutlined />,
    onClick: async () =>
      await new Promise((resolve) => setTimeout(resolve, 1000)),
  },
};

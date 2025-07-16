import { Alert } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof Alert>;

export const BaseAlert: Story = {
  args: {
    children: "Alert description goes here",
  },
};
